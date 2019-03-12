import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IHotel} from '../interfaces/ihotel';

@Component({
  selector: 'app-booked-list',
  templateUrl: './booked-list.component.html',
  styleUrls: ['./booked-list.component.scss']
})
export class BookedListComponent implements OnInit {

  @Input() public hotels: IHotel;

  @Output() onUnbook = new EventEmitter<number>();

  public unbook (id: number) {
    this.onUnbook.emit(id);
  }

  constructor() { }

  ngOnInit() {
  }

}
