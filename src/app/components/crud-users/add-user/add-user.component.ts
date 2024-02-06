import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,  //update dialog
    private fb : FormBuilder,
    private toaster : ToastrService,
    private spinner : NgxSpinnerService,
    private userService : UsersService,
    public dialog: MatDialogRef<AddUserComponent>,
  ){}

  ngOnInit(): void {
    this.createForm();
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
  }

  newUserFrom : FormGroup;

  createForm(){
    this.newUserFrom = this.fb.group({
      username : [this.data?.username || '',Validators.required],
      email : [this.data?.email || '', Validators.required],
      password : [this.data?.password || '', Validators.required],
    });
  }

    // Add User
    addUser(){
      this.spinner.show();
      let model = this.newUserFrom.value;
      this.userService.createUser(model).subscribe((res)=>{
        this.spinner.hide();
        this.toaster.success("Create Success!");
        this.dialog.close(true);
      },error=>{
        console.log(error);
            this.toaster.error(error.error.message)
      })
    }

      // Update User
      updateUser(){
        this.spinner.show();
        let model = this.newUserFrom.value;
        console.log(model);
        this.userService.updateUser(model,this.data._id).subscribe((res)=>{
          this.spinner.hide();
          this.toaster.success("Update Success!");
          this.dialog.close(true);
        },error=>{
          console.log(error);
              this.toaster.error(error.error.message)
        })
      }

  // preparedFormData(){
  //   let formData = new FormData();
  //   Object.entries(this.newUserFrom.value).forEach(([key, value]:any)=>{
  //       formData.append(key,value);
  //   })
  //   return formData;

  // }

}
