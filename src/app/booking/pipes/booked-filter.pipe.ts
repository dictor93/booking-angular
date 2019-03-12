import { Pipe, PipeTransform } from '@angular/core';
import {IHotel} from '../interfaces/ihotel'

@Pipe({
  name: 'bookedFilter'
})
export class BookedFilterPipe implements PipeTransform {

  transform(hotels: IHotel[], booked?: number[]): any {
    return hotels && hotels.filter(hotel => booked ? booked.includes(hotel.id) : false);
  }

}
