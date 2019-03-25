import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  public resizeObservable$: Observable<boolean>;

  public constructor() {
    this.resizeObservable$ = fromEvent(window, 'resize').pipe(
      map((event: Event): boolean => (event.target as Window).innerWidth < 960 ? true : false),
      distinctUntilChanged(),
    );
  }
}
