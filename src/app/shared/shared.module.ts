import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { LoginRoutingModule } from '../components/auth/login/login-routing.module';
import { RouterModule } from '@angular/router';
// import { DashboardRoutingModule } from '../components/dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    OneProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LoginRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    OneProductComponent
  ]
})
export class SharedModule { }
