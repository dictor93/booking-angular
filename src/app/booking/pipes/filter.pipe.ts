import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../interfaces/ihotel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(hotels: IHotel[], stars: number, text: string): IHotel[] {
    return hotels
    ? hotels
    .filter((hotel: IHotel) => stars ? (hotel.stars === stars) : true )
    .filter((hotel: IHotel) => text ? (`${hotel.title} ${hotel.description}`.toLowerCase().includes(text.toLowerCase())) : true)
    : hotels;
  }

}
