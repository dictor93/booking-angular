import { Component, OnInit } from '@angular/core';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  public isDrawerOpen: boolean = window.innerWidth >= 960;
  public drawerMode: string = window.innerWidth < 960 ? 'over' : 'side';
  public constructor(
    private windowService: WindowService,
  ) { }

  public drawerController(isOpen: null | boolean = null): void {
    if (isOpen !== null) {
      this.isDrawerOpen = isOpen;
    } else {
      this.isDrawerOpen = !this.isDrawerOpen;
    }
  }


  public ngOnInit(): void {
    this.windowService.resizeObservable$.subscribe((small: boolean): void => {
      this.drawerMode = small ? 'over' : 'side';
      this.isDrawerOpen = !small;
    });
  }

}
