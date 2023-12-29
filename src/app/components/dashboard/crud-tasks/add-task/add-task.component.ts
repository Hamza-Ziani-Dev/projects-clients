import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../tasks.service';

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
    ) { }
  
  users:any = [
    {name:"Moahmed" , id:1},
    {name:"Ali" , id:2},
    {name:"Ahmed" , id:3},
    {name:"Zain" , id:4},
  ]

  fileName = "";
  newTaskFrom : FormGroup;

  ngOnInit(): void {
  }

  createForm(){
    this.newTaskFrom = this.fb.group({
      title : ['', Validators.required],
      // userId : ['', Validators.required],
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
    console.log(this.newTaskFrom.value);
    this.taskService.createTask(this.newTaskFrom.value).subscribe((res)=>{
      // console.log(res);
    })

  }

}
