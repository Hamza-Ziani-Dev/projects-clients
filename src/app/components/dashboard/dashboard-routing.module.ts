import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './crud-tasks/tasks/tasks.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
  children:[
    {path:'tasks', loadChildren: () => import(`./crud-tasks/crud-tasks.module`).then(m => m.CrudTasksModule) },
  ]
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
