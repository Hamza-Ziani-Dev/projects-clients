import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
  children:[
    {path:'tasks', loadChildren: () => import(`../crud-tasks/crud-tasks.module`).then(m => m.CrudTasksModule) },
    {path:'users', loadChildren: () => import(`../crud-users/crud-users.module`).then(m => m.CrudUsersModule) },
  ]
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
