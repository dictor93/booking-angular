import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IHotel} from '../interfaces/ihotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  @Input() public hotels: IHotel;

  @Input() public title: string;

  @Input() public buttonText: string;

  @Output() onButtonAction = new EventEmitter<number>();

  public buttonAction (id: number) {
    this.onButtonAction.emit(id);
  }

  constructor() { }

  ngOnInit() {
  }

}
