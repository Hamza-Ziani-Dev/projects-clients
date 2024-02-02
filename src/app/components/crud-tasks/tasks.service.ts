import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get('http://localhost:3001/api/users/profile/');
  }

  getAllTasks(filter:any){
    let params = new HttpParams();
    if(filter.keyword){
      params = params.append('keyword', filter.keyword)
    }
    return this.http.get('http://localhost:3001/api/tasks',{params});
  }
  
  deleteTask(id:any){
    return this.http.delete('http://localhost:3001/api/tasks/'+id);
  }


  createTask(model:any){
    return this.http.post('http://localhost:3001/api/tasks/',model);
  }

  updateTask(model:any,id:any){
    return this.http.put('http://localhost:3001/api/tasks/'+id,model);
  }
}
