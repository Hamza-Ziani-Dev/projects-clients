import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Task } from 'src/app/interface/Task.interface';



const ELEMENT_DATA: Task[] = [
  {id: 1,title:'Hydrogen',user:'hamza',deadline:'H',status:true},
];
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  displayedColumns: string[] = ['id', 'title', 'user', 'deadline','status'];
  dataSource = ELEMENT_DATA;
  tasksFilter!:FormGroup
  users:any = []
  status:any = []
  page:any = 1
  filteration:any = {
    page:this.page,
    limit:10
  }
  timeOutId:any
  total:any
  constructor(
    private tasksService: TasksService,
    public dialog: MatDialog 
    ) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(){
    this.tasksService.getAllTasks().subscribe((res)=>{
      // console.log(res);
    })
  }


  //addTask
  addTask(){
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width:'750px',
      height:'500px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
