import { Component, OnInit } from '@angular/core';
import { ApiMethodsService } from './api-methods.service';
import { IHotel } from './interfaces/ihotel';
import { IProfile } from './interfaces/iprofile';
import { IWeather } from './interfaces/iweather';


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
  public addonsBreakpoint: number;
  public listBreakpoint: number;
  public starsSort: number;
  public searchText: string;
  constructor(private apiMethodsService: ApiMethodsService) {

  }
  async ngOnInit() {
    this.addonsBreakpoint = (window.innerWidth <= 550) ? 5 : 2;
    this.listBreakpoint = (window.innerWidth <= 550) ? 5 : 3;
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

  public setStarsSort(event: {[rating: string]: number}) {
    this.starsSort = event.rating;
  }

  public changeHotel(id: number) {
    this.selectedHotelId = id;
    this.currentHotel = this.hotels.find((hotel: IHotel) => id === hotel.id);
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public onResize(event: { target: { innerWidth: number; }; }) {
    this.addonsBreakpoint = (event.target.innerWidth <= 550) ? 5 : 2;
    this.listBreakpoint = (event.target.innerWidth <= 550) ? 5 : 3;
    console.log(this.listBreakpoint)
  }


}
