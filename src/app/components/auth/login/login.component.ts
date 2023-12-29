import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb:FormBuilder ,
    private loginService:LoginService , 
    private toaster:ToastrService,
    private router:Router,
    private spinner : NgxSpinnerService
    ) { }

  loginForm!:FormGroup
  ngOnInit(): void {
    this.createForm()
  }


  createForm() {
    this.loginForm = this.fb.group({
      email:['' , [Validators.required , Validators.email] ],
      password:['' , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]],
      // role:['admin']
    })
  }

 // Update your login method in your component

login() {
  this.spinner.show();
  this.loginService.getLogin(this.loginForm.value).subscribe((res:any)=>{
    localStorage.setItem("token" , res.token)
    this.toaster.success("Success" , "Login Success")
    this.router.navigate(['/tasks']);
    this.spinner.hide();
  });
}




}
