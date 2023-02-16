import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {
  name = 'mfe2 SharedLibService'
  count = 0
  count$ = new Subject<number>()
  constructor() { }

  setCount(count: number) {
    this.count = count
    this.count$.next(count)
  }
}
