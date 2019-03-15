import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../interfaces/ihotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  @Input() public hotels: IHotel;

  @Input() public title: string;

  @Input() public buttonText: string;

  @Output() private onButtonAction: EventEmitter<number> = new EventEmitter<number>();

  public constructor() { }

  public buttonAction (id: number): void {
    this.onButtonAction.emit(id);
  }

  public ngOnInit(): void {
  }

}
