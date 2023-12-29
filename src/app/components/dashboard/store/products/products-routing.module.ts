import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
