import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:TasksComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudTasksRoutingModule { }
