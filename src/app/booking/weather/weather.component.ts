import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from '../interfaces/iweather';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input()
  public weather: IWeather;

  @Input()
  public isLoading: boolean;

  constructor() {  }

  ngOnInit() {
  }

}
