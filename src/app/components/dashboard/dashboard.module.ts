import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
  LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // SharedModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
