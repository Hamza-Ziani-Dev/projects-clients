import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from 'src/app/interface/Register.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  getRegister(model:Register){
    return this.http.post('http://localhost:3001/api/auth/register/',model)
  }
}
