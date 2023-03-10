import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoComponent } from './no/no.component';
import { ButtonModule } from 'ng-devui/button';
import { IconModule } from 'ng-devui/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NoComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    IconModule,
    NzButtonModule,
    HttpClientModule,
    NzMenuModule,
    NzIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          {
            path: 'comments',
            loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule),
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
