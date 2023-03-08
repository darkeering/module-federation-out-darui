import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { RouterModule } from '@angular/router';
import { SharedLibModule } from '@darkeering/shared-lib';



@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    SharedLibModule,
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
