import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiMethodsService {

  constructor(private _http: HttpClient) { }
  private hotelsUrl: string = 'http://localhost:8080/hotels/';
  public getHotels() {
    return this._http.get(this.hotelsUrl);
  }
}
