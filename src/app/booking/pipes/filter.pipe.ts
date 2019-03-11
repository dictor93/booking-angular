import { Pipe, PipeTransform } from '@angular/core';
import {IHotel} from '../interfaces/ihotel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: IHotel[], stars: number, text: string): IHotel[] {
    return products
    .filter(product => stars ? (product.stars === stars) : true )
    .filter(product => text ? (`${product.title} ${product.description}`.toLowerCase().includes(text.toLowerCase())) : true)
  }

}
