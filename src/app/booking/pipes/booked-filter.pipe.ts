import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../interfaces/ihotel';

@Pipe({
  name: 'bookedFilter'
})
export class BookedFilterPipe implements PipeTransform {

  public transform(hotels: IHotel[], booked?: number[]): any {
    return hotels && hotels.filter((hotel: IHotel) => booked ? booked.includes(hotel.id) : false);
  }

}
