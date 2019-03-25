import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BookingModule } from '../booking/booking.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [DrawerComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    BookingModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [
    DrawerComponent
  ]
})
export class DrawerModule { }
