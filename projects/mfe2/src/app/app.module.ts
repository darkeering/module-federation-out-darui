import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
      }
    ])
  ],
  providers: []
})
export class AppModule { }
