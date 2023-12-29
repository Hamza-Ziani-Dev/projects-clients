import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:'', loadChildren: () => import(`./components/dashboard/dashboard.module`).then(m => m.DashboardModule) },
  {path:'login', loadChildren: () => import(`./components/auth/login/login.module`).then(m => m.LoginModule) },
  {path:'register', loadChildren: () => import(`./components/auth/register/register.module`).then(m => m.RegisterModule) },
  // { path: '**', redirectTo:"" , pathMatch:"full"},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ]
})
export class AppRoutingModule { }
