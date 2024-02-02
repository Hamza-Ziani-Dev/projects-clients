import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Task } from 'src/app/interface/Task.interface';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  displayedColumns: string[] = ['id', 'title', 'user', 'deadline','status','actions'];
  dataSource : any;
  clearTime:any;
  // tasksFilter!:FormGroup
  users:any = []
  status:any = []
  page:any = 1
  filteration: any = {
    keyword: ''
};
  timeOutId:any
  total:any
  constructor(
    private tasksService: TasksService,
    public dialog: MatDialog,
    private toaster : ToastrService,
    private spinner : NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllTasks();
  }

  //Search :
  search(event:any){
    this.filteration.keyword = event.value
    clearTimeout(this.clearTime)
    setTimeout(()=>{
      this.getAllTasks();
    },2000)
  }
  //Select User\
  selectUser(event:any){
    console.log(event);
    

  }

  // get All Tasks
  getAllTasks(){
    this.tasksService.getAllTasks(this.filteration).subscribe((res)=>{
         this.dataSource = res;  
         console.log(this.dataSource);
         
    })
  }

   // get All Users
   getAllUsers(){
    this.tasksService.getAllUsers().subscribe((res)=>{
         this.users = res;
    })
  }


  //addTask
  addTask(){
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width:'750px',
      height:'500px',
      disableClose : true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
      }
    });
  }

  //Delete Task:
  deleteTask(id:any){
    this.spinner.show();
    this.tasksService.deleteTask(id).subscribe((res)=>{
      this.spinner.hide();
      this.toaster.success("Delete Success!");
      this.getAllTasks();
    },error=>{
      console.log(error);
          this.toaster.error(error.message)
    })
  }

  //Update Task:
  updateTask(elemnt:any){
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width:'750px',
      height:'500px',
      data: elemnt,
      disableClose : true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
      }
    });
  }


  
}
