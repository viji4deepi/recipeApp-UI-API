import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../service/loginuser.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private http :HttpClient,
    private router : Router,
    private loginUserService: LoginuserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required] 
    })
  }
  login() {
    this.loginUserService.loginUser(this.loginForm.value)
    .subscribe((res: any) =>{
      alert("Login Sucessful");
     this.router.navigate(['ingredients']);
 
  }, err =>{
    alert("Something went wrong");
  })
}

}
