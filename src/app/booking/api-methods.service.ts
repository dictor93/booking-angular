import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../config';

@Injectable()
export class ApiMethodsService {
  private hotelsUrl: string = `${API_BASE_URL}hotels/`;
  private bookingsUrl: string = `${API_BASE_URL}bookings/`;

  public constructor(private _http: HttpClient) { }
  public getHotels(): Promise<{}> {                                         // Promise<IHotel[]>
    return this._http.get(this.hotelsUrl).toPromise();
  }
  public getBookings(id: string | number): Promise<{}> {                    // Promise<{id: number, hotels: number[]}>
    return this._http.get(this.bookingsUrl + id).toPromise();
  }
  public setBookings(id: string | number, data: number[]): Promise<{}> {    // Promise<{ok: boolean}>
    return this._http.put(this.bookingsUrl, { _id: id, bookings: data }).toPromise();
  }
}
