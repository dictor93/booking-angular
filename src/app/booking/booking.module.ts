import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { DetailComponent } from './detail/detail.component';
import { MatCardModule, MatGridListModule, MatListModule } from '@angular/material';
import { ApiMethodsService } from './api-methods.service';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  declarations: [BookingComponent, ListComponent, WeatherComponent, DetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    StarRatingModule.forRoot()
  ],
  exports: [
    BookingComponent,
  ],
  providers: [ApiMethodsService],
})
export class BookingModule { }
