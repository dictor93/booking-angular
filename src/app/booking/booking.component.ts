import { Component, OnInit } from '@angular/core';
import { ApiMethodsService } from './api-methods.service';
import { IHotel } from './interfaces/ihotel';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {
  public hotels: IHotel[];
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
    this.currentHotel = this.hotels.find((hotel: IHotel) => id === hotel.id);
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public bookingHotel(id: number): void {

    if (this.bookedHotels && this.bookedHotels.includes(id)) {
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

  private async getHotels(): Promise<void> {
    try {
      this.isLoading = true;
      this.hotels = await this.apiMethodsService.getHotels() as IHotel[];
      if (this.hotels.length > 0) {
        this.selectedHotelId = this.hotels[0].id;
        this.currentHotel = this.hotels[0];

      }
    } catch (err) {

    } finally {
      this.isLoading = false;
    }
  }

  private async getBookings(): Promise<void> {
    try {
      this.isLoading = true;
      const resp: {bookings: number[]}[] = await this.apiMethodsService.getBookings('default') as {bookings: number[]}[];
      this.bookedHotels = resp[0].bookings;
      this.isLoading = false;
    } catch (err) {

    } finally {
      this.isLoading = false;
    }
  }

  private async setBooking(booked: number[]): Promise<void> {
    try {
      this.isLoading = true;
      const resp: {ok: boolean} = await this.apiMethodsService.setBookings('default', booked) as {ok: boolean};
      if (resp.ok) {
        this.bookedHotels = booked;
        this.snackBar.open('Hotel booked', 'OK', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end'
        });
      }
    } catch (err) {

    } finally {
      this.isLoading = false;
    }
  }
}
