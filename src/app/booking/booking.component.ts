import { Component, OnInit } from '@angular/core';
import { ApiMethodsService } from './api-methods.service';
import { IHotel } from './interfaces/ihotel';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public hotels;
  public selectedHotelId: number;
  public isLoading: boolean;
  constructor(private apiMethodsService: ApiMethodsService) {

  }
  async ngOnInit() {
    this.isLoading = true;
    this.apiMethodsService.getHotels().subscribe(
      hotels => {
        console.log(hotels)
        this.hotels = hotels;
        this.hotels.length > 0 && (this.selectedHotelId = hotels[0]);
        this.isLoading = false;
      },
      console.log
    );
  }

  public changeHotel(e: number){
    this.selectedHotelId = e;
  }

}
