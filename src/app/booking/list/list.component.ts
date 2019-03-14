import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {IHotel} from '../interfaces/ihotel';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  public hotels: IHotel;

  @Input()
  public starsSort: number;

  @Input()
  public searchText: string;

  @Output() onHotelChange = new EventEmitter<number>();
  selectHotel: (id: number) => void = (id: number) => {
    this.onHotelChange.emit(id);
  }

  @Output() onBooking = new EventEmitter<number>();

  @Output() onFavorit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public bookingHotel (event: Event, id: number) {
    event.stopPropagation();
    this.onBooking.emit(id);
  }

  public toFavorit (event: Event, id: number) {
    event.stopPropagation();
    this.onFavorit.emit(id);
  }
}
