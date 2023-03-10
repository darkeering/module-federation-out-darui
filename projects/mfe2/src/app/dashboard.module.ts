import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          loadChildren: () => import("./app.module").then((m) => m.AppModule),
        },
      ]
    )
  ],
  providers: [
  ],
  bootstrap: [DashboardComponent],
})
export class DashboardModule { }