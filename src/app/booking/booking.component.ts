import { Component, OnInit } from '@angular/core';
import { ApiMethodsService } from './api-methods.service';
import { IHotel } from './interfaces/ihotel';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { filter, find, findIndex, single } from 'rxjs/operators';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {
  public hotels$: Observable<IHotel[]>;
  public selectedHotelId: number;
  public currentHotel: IHotel;
  public isLoading: boolean;
  public starsSort: number;
  public searchText: string;
  public bookedHotels: number[] = [];
  public constructor(
    private apiMethodsService: ApiMethodsService,
    private snackBar: MatSnackBar,
  ) { }

  public resetFilters(event: Event): void {
    event.stopPropagation();
    this.searchText = '';
    this.starsSort = 0;
  }

  public setStarsSort(event: { [rating: string]: number }): void {
    this.starsSort = event.rating;
  }

  public changeHotel(id: number): void {
    this.selectedHotelId = id;
    this.hotels$.subscribe((hotels: IHotel[]) => {
      this.currentHotel = hotels.find((hotel: IHotel) => hotel.id === id);
    });
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public bookingHotel(id: number): void {
    if (this.bookedHotels && this.bookedHotels.find((currentId: number) => currentId === id)) {
      this.snackBar.open('This hotel is alredy booked', 'OK', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'end'
      });
    } else {
      const bookedHotels: number[] = [id, ...this.bookedHotels];
      this.setBooking(bookedHotels);
    }
  }

  public unbook(id: number): void {
    const bookedHotels: number[] = this.bookedHotels.filter((hotel: number) => !(hotel === id));
    this.setBooking(bookedHotels);
  }

  public ngOnInit(): void {
    this.getHotels();
    this.getBookings();
  }

  private getHotels(): void {
    this.hotels$ = this.apiMethodsService.getHotels();
  }

  private getBookings(): void {
    this.apiMethodsService.getBookings('default').subscribe(
      (hotelsId: number[]) => {
        this.bookedHotels = hotelsId;
      }
    );
  }

  private setBooking(booked: number[]): void {
    this.apiMethodsService.setBookings('default', booked).subscribe(
      (response: { ok: boolean }) => {
        if (response.ok) {
          this.bookedHotels = booked;
        }
      }
    );
  }
}
