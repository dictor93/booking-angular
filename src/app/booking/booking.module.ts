import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { DetailComponent } from './detail/detail.component';
import { MatCardModule, MatGridListModule, MatListModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ApiMethodsService } from './api-methods.service';
import {StarRatingModule} from 'angular-star-rating';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [BookingComponent, ListComponent, WeatherComponent, DetailComponent, FilterPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    StarRatingModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    BookingComponent,
  ],
  providers: [ApiMethodsService],
})
export class BookingModule { }
