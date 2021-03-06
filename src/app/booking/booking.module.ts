import { MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BookingComponent } from './booking.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { DetailComponent } from './detail/detail.component';
import { CommonModule } from '@angular/common';
import { ApiMethodsService } from './api-methods.service';
import { StarRatingModule } from 'angular-star-rating';
import { FilterPipe } from './pipes/filter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookedFilterPipe } from './pipes/booked-filter.pipe';
import { HotelsListComponent } from './hotels-list/hotels-list.component';


@NgModule({
  declarations: [BookingComponent, ListComponent, WeatherComponent, DetailComponent, FilterPipe, BookedFilterPipe, HotelsListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    StarRatingModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    BookingComponent,
  ],
  providers: [ApiMethodsService],
})
export class BookingModule { }
