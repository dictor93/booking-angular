import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../interfaces/iprofile';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input()
  public detail: IProfile;

  @Input()
  public isLoading: boolean;
  public ngOnInit(): void {
  }

}
