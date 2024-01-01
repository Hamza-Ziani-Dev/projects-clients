import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DetailUserComponent } from './crud-users/detail-user/detail-user.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children:[
    {path:'products', loadChildren: () => import(`./store/store.module`).then(m => m.StoreModule) },
    {path:'tasks', loadChildren: () => import(`./crud-tasks/crud-tasks.module`).then(m => m.CrudTasksModule) },
    {path:'users', loadChildren: () => import(`./crud-users/users/users.module`).then(m => m.UsersModule) },
  ]
 },
 {path: 'detailsUsers/:uuid', component: DetailUserComponent},
  
  // { path: '**', redirectTo:"products" , pathMatch:"full"},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
