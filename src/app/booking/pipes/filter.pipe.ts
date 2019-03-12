import { Pipe, PipeTransform } from '@angular/core';
import {IHotel} from '../interfaces/ihotel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(hotels: IHotel[], stars: number, text: string): IHotel[] {
    return hotels
    ? hotels
    .filter(hotel => stars ? (hotel.stars === stars) : true )
    .filter(hotel => text ? (`${hotel.title} ${hotel.description}`.toLowerCase().includes(text.toLowerCase())) : true)
    : hotels;
  }

}
