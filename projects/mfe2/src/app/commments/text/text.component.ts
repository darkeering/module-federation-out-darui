import { Component } from '@angular/core';
import { SharedLibService } from 'projects/shared-lib/src/public-api';

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
}
