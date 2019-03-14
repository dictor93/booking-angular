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
  constructor(
    private apiMethodsService: ApiMethodsService,
    private snackBar: MatSnackBar,
  ) {

  }
  async ngOnInit() {
    this.getHotels();
    this.getBookings();
  }

  private getHotels() {
    this.isLoading = true;
    this.apiMethodsService.getHotels().subscribe(
      (hotels: IHotel[]) => {
        console.log(hotels);
        this.hotels = hotels;
        if (this.hotels.length > 0) {
          this.selectedHotelId = hotels[0].id;
          this.currentHotel = hotels[0];

        };

        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  private getBookings() {
    this.isLoading = true;
    this.apiMethodsService.getBookings('default').subscribe(
      (hotels: {bookings: number[]}) => {
        console.log(hotels);
        this.bookedHotels = hotels[0].bookings;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  private setBooking(booked: number[]) {
    this.isLoading = true;
    return this.apiMethodsService.setBookings('default', booked).subscribe(
      (data: { [key: string]: any }) => {
        if (data.ok) {
          this.bookedHotels = booked;
          this.snackBar.open('Hotel booked', 'OK', { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' });
        }

      },
      () => {
        this.snackBar.open('Something wrong', 'OK', { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' });
      }
    );
  }

  public setStarsSort(event: { [rating: string]: number }) {
    this.starsSort = event.rating;
  }

  public changeHotel(id: number) {
    this.selectedHotelId = id;
    this.currentHotel = this.hotels.find((hotel: IHotel) => id === hotel.id);
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public bookingHotel(id: number) {
    console.log(id);
    if (this.bookedHotels && this.bookedHotels.includes(id)) {
      this.snackBar.open('This hotel is alredy booked', 'OK', { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' });
    } else {
      const bookedHotels = [id, ...this.bookedHotels];
      this.setBooking(bookedHotels)
    }
  }

  public unbook(id: number) {
    const bookedHotels = this.bookedHotels.filter(hotel => !(hotel == id));
    console.log(this.setBooking(bookedHotels));
  }
}
