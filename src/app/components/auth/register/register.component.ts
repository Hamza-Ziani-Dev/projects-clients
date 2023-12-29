import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private fb:FormBuilder ,
    private registerService:RegisterService , 
    private toaster:ToastrService,
    private router:Router,
    private spinner : NgxSpinnerService
    ) { }

  registerForm!:FormGroup
  ngOnInit(): void {
    this.createForm()
  }


  createForm() {
    this.registerForm = this.fb.group({
      email:['' , [Validators.required , Validators.email] ],
      username:['' , [Validators.required  ] ],
      password:['' , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]],
      // role:['admin']
    })
  }

register() {
  this.spinner.show();
  this.registerService.getRegister(this.registerForm.value).subscribe((res:any)=>{
    localStorage.setItem("token" , res.token)
    this.toaster.success("Success" , "Register Success")
    this.router.navigate(['/products']);
    this.spinner.hide();
  });
}

}
