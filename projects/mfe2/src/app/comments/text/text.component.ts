import { Component } from '@angular/core';
import { SharedLibService } from '@darkeering/shared-lib';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  name = ''
  count = 0
  constructor(
    private sharedLibService: SharedLibService
  ) {
    this.name = this.sharedLibService.name
    this.sharedLibService.count$.subscribe(count => {
      this.count = count
    })
  }

  setCount(count: any) {
    this.sharedLibService.setCount(count)
  }
}
