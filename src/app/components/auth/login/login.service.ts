import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/interface/Login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  getLogin(model:Login){
    return this.http.post('http://localhost:3001/api/auth/login/',model)
  }
}
