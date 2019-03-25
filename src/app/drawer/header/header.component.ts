import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  private drawerToggle: EventEmitter<number>  = new EventEmitter<number>();

  public constructor() { }

  public ngOnInit() {
  }

  public onToggleSidenav (): void {
    this.drawerToggle.emit();
  }

}
