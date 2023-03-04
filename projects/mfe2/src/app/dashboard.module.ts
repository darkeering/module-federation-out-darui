import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        loadChildren: () => import("./app.module").then((m) => m.AppModule),
      },
    ]),
  ],
  bootstrap: [DashboardComponent],
})
export class DashboardModule { }