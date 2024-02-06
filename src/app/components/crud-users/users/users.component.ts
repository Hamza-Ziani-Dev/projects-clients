import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(
    private userService: UsersService,
    public dialog: MatDialog,
    private toaster : ToastrService,
    private spinner : NgxSpinnerService
  ){}
  displayedColumns: string[] = ['profilePhoto', 'username', 'email','isAdmin','actions'];
  dataSource : any;
ngOnInit(): void {
  this.getAllUsers();
}

  // get All Users
 getAllUsers(){
  this.userService.getAllUsers().subscribe((res)=>{
       this.dataSource = res;
       console.log('====================================');
       console.log(this.dataSource );
       console.log('====================================');
  })
}

// Add User
addUser(){
  const dialogRef = this.dialog.open(AddUserComponent, {
    width:'750px',
    height:'500px',
    disableClose : true,
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getAllUsers()
    }
  });
}


// Add User
updateUser(element:any){
  const dialogRef = this.dialog.open(AddUserComponent, {
    width:'750px',
    height:'500px',
    data : element,
    disableClose : true,
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getAllUsers()
    }
  });
}


// Delete User :
deleteUser(id:any){
  this.spinner.show();
  this.userService.deleteUser(id).subscribe((res)=>{
    this.spinner.hide();
    this.toaster.success("Delete Success!");
    this.getAllUsers();
  },error=>{
    console.log(error);
        this.toaster.error(error.message)
  })
}

}



 