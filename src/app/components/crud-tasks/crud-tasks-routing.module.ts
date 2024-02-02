import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';
// import { LayoutComponent } from '../dashboard/layout/layout.component';


const routes: Routes = [
  {
    path: '', component: TasksComponent,
  // children:[
  //   {path:'tasks', loadChildren: () => import(`../crud-tasks/crud-tasks.module`).then(m => m.CrudTasksModule) },
  // ]
}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudTasksRoutingModule { }
