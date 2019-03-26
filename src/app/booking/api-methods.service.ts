import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../config';
import { Observable } from 'rxjs';
import { IHotel } from './interfaces/ihotel';
import { map } from 'rxjs/operators';
import Shake from 'shake.js';

@Injectable()
export class ApiMethodsService {
  private hotelsUrl: string = `${API_BASE_URL}hotels/`;
  private bookingsUrl: string = `${API_BASE_URL}bookings/`;

  public constructor(private _http: HttpClient) { }
  public getHotels(): Observable<IHotel[]> {
    return this._http.get<IHotel[]>(this.hotelsUrl);
  }
  public getBookings(id: string | number): Observable<number[]> {
    return this._http.get<{id: number, hotels: number[]}>(this.bookingsUrl + id).pipe(
      map((resp: {id: number, hotels: number[]}) => {
        // console.log(resp[0].bookings);
        return resp[0].bookings;
      }),
    );
  }
  public setBookings(id: string | number, data: number[]): Observable<{ok: boolean}> {
    return this._http.put<{ok: boolean}>(this.bookingsUrl, { _id: id, bookings: data });
  }

  public shakeListen(): void {
    const shakeEvent = new Shake({threshold: 15});
    shakeEvent.start();
    window.addEventListener('shake', function(){
      alert("Shaked");
  }, false);
  }
}
