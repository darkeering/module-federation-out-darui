import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { RouterModule } from '@angular/router';
import { SharedLibModule } from '@darkeering/shared-lib';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    SharedLibModule,
    NzButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TextComponent
      }
    ])
  ],
  providers: [
  ]
})
export class CommentsModule { }
