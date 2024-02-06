import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(environment.API_users);
  }

  createUser(model:any){
    return this.http.post(environment.base_API_users,model);
  }

  deleteUser(id:any){
    return this.http.delete(environment.API_users+id);
  }


  updateUser(id:any,model:any){
    return this.http.put(environment.API_users+id,model);
  }

}
