import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getAllTasks(){
    return this.http.get('http://localhost:3001/api/tasks');
  }


  createTask(model:Task){
    return this.http.post('http://localhost:3001/api/tasks',model);
  }
}
