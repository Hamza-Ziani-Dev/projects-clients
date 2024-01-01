import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Response } from 'src/app/interface/Response.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

response :Response;

constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.userService.getUsers(20).subscribe((res)=>{
      this.response = res;
      console.log(this.response);
    });
  }

}
