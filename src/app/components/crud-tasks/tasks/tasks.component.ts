import { Component, ViewChild } from '@angular/core';
import { TasksService } from '../tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { MatPaginator } from '@angular/material/paginator';



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
  users:any = [];
  status:any = [];
  page:any = 1;
  total : any;
  timeOutId:any;
  filteration: any = {
    page: this.page,
    limit :10,
};
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private tasksService: TasksService,
    public dialog: MatDialog,
    private toaster : ToastrService,
    private spinner : NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.getAllTasks();
    
  }

  //Filter Title :
  search(event:any){
    this.filteration.title = event.value
    this.page = 1,
    this.filteration['page'] = 1,
    clearTimeout(this.clearTime)
    setTimeout(()=>{
      this.getAllTasks();
    },2000)
  }
  //Filter User
  selectUser(event:any){
    this.filteration.userId = event.value
    clearTimeout(this.clearTime)
    setTimeout(()=>{
      this.getAllTasks();
    },2000)
  }

   //Filter  Status
   selectStatus(event:any){
    this.filteration.status = event.value
    clearTimeout(this.clearTime)
    setTimeout(()=>{
      this.getAllTasks();
    },2000)
  }
  // Filter Date
  selectData(event:any, type:any){
    this.filteration[type] = moment(event.value).format('DD-MM-YYYY');
    clearTimeout(this.clearTime)
    setTimeout(()=>{
      this.getAllTasks();
    },1000)
  
  }

  // Paggination :
  pageChanged(event:any){
    this.page = event;
    this.filteration['page'] = event
    this.getAllTasks();
  }

  // get All Tasks
  getAllTasks(){
    this.tasksService.getAllTasks(this.filteration).subscribe((res:any)=>{
         this.dataSource = res;
         this.total = res.totalItems;  
         this.users = res;  
    },error=>{
      this.toaster.error(
        error.message
      )
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
      height:'660px',
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
