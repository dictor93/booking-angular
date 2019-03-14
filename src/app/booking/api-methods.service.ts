import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_BASE_URL} from '../../config';

@Injectable()
export class ApiMethodsService {

  constructor(private _http: HttpClient) { }
  private hotelsUrl: string = `${API_BASE_URL}hotels/`;
  private bookingsUrl: string = `${API_BASE_URL}bookings/`
  public getHotels() {
    return this._http.get(this.hotelsUrl);
  }
  public getBookings(id: string | number) {
    return this._http.get(this.bookingsUrl + id);
  }
  public setBookings(id: string | number, data: number[]) {
    return this._http.put(this.bookingsUrl, {_id: id, bookings: data})
  }
}
