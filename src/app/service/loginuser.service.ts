import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor( private service:Service) { }

  loginUser(user :any):Observable<object>{
      console.log(user);
    return this.service.post("http://localhost:8080/users/login",user);
  }
}
