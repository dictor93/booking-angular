import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_BASE_URL} from '../../config';

@Injectable()
export class ApiMethodsService {

  constructor(private _http: HttpClient) { }
  private hotelsUrl: string = `${API_BASE_URL}hotels/`;
  public getHotels() {
    return this._http.get(this.hotelsUrl);
  }
}
