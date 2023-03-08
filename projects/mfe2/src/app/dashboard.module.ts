import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestGuard } from './guard/test.guard';
import { Test1Guard } from './guard/test1.guard';
import { Test3Guard } from './guard/test3.guard';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          // canActivateChild:  [Test1Guard],
          loadChildren: () => import("./app.module").then((m) => m.AppModule),
        },
        // {
        //   path: '**',
        //   canActivateChild: [Test1Guard],
        //   loadChildren: () => import('./comments/comments.module').then((m) => m.CommentsModule),
        // }
      ]
    )
  ],
  providers: [
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: 'mfe2'
    // }
  ],
  bootstrap: [DashboardComponent],
})
export class DashboardModule { }