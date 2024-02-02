import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
  LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
