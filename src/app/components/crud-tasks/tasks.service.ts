import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getAllTasks(filter:any){
    let params = new HttpParams();
    Object.entries(filter).forEach(([key, value]:any)=>{
      if(value){
        params = params.append(key , value)
      }
    })
    return this.http.get(environment.API_tasks ,{params});
  }
  
  deleteTask(id:any){
    return this.http.delete(environment.API_tasks+id);
  }


  createTask(model:any){
    return this.http.post(environment.API_tasks,model);
  }

  updateTask(model:any,id:any){
    return this.http.put(environment.API_tasks+id,model);
  }
}
