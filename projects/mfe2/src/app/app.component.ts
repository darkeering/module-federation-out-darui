import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLibService } from '@darkeering/shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'mfe2';
  name = ''
  count = 0
  constructor(
    private router: Router,
    private sharedLibService: SharedLibService
  ) {
    this.name = this.sharedLibService.name
    this.sharedLibService.count$.subscribe(count => {
      this.count = count
    })
  }

  navigate(path: any) {
    this.router.navigate([path])
  }
}
