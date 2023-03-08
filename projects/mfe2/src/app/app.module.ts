import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Test1Guard } from './guard/test1.guard';
import { Test2Guard } from './guard/test2.guard';
import { NoComponent } from './no/no.component';



@NgModule({
  declarations: [
    AppComponent,
    NoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          {
            path: 'comments',
            loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)
          },
        ]
      },
      {
        path: '**',
        component: NoComponent
      }
    ])
  ],
  providers: [
  ]
})
export class AppModule { }
