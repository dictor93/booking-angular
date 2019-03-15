import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../interfaces/ihotel';


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

  @Output() private onHotelChange: EventEmitter<number>  = new EventEmitter<number>();

  @Output() private onBooking: EventEmitter<number> = new EventEmitter<number>();

  @Output() private onFavorit: EventEmitter<number> = new EventEmitter<number>();

  public constructor() { }

  public ngOnInit(): void {
  }

  public selectHotel(id: number): void {
    this.onHotelChange.emit(id);
  }

  public bookingHotel (event: Event, id: number): void {
    event.stopPropagation();
    this.onBooking.emit(id);
  }

  public toFavorit (event: Event, id: number): void {
    event.stopPropagation();
    this.onFavorit.emit(id);
  }
}
