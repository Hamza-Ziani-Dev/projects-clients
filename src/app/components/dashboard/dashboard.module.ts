import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { DetailUserComponent } from './crud-users/detail-user/detail-user.component';



@NgModule({
  declarations: [
  LayoutComponent,
  DetailUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
