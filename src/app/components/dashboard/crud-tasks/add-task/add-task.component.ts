import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../tasks.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  constructor(
    private fb:FormBuilder,
    public dialog: MatDialogRef<AddTaskComponent>,
    public matDialog:MatDialog,
    private taskService : TasksService,
    private toaster : ToastrService,
    private spinner : NgxSpinnerService
    ) { }
  
  users:any = []

  fileName = "";
  newTaskFrom : FormGroup;

  ngOnInit(): void {
    this.createForm();
    this.getAllUsers();
  }

  getAllUsers(){
    this.taskService.getAllUsers().subscribe((res)=>{
      this.users = res;
    })
  }

  createForm(){
    this.newTaskFrom = this.fb.group({
      title : ['', Validators.required],
      image : ['', Validators.required],
      description : ['', Validators.required],
      deadline : ['', Validators.required],
    });
  }

  selectImage(event : any){
    this.fileName = event.target.value;
    this.newTaskFrom.get('image')?.setValue(event.target.files[0]);
  }


  createTask(){
    this.spinner.show();
    let model = this.preparedFormData();
    this.taskService.createTask(model).subscribe((res)=>{
      this.spinner.hide();
      this.toaster.success("Create Success!");
      this.dialog.close(true);
    },error=>{
      console.log(error);
          this.toaster.error(error.error.message)
    })
  }

  preparedFormData(){
    let newData = moment(this.newTaskFrom.value['deadline']).format('DD-MM-YYYY');
    let formData = new FormData();
    Object.entries(this.newTaskFrom.value).forEach(([key, value]:any)=>{
      if (key == 'deadline') {
         formData.append(key, newData)
      } else {
        formData.append(key,value);
      }
    })
    return formData;
  }

}
