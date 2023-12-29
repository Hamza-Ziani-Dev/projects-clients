import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudTasksRoutingModule } from './crud-tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    TasksComponent,
    AddTaskComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CrudTasksRoutingModule
  ]
})
export class CrudTasksModule { }
