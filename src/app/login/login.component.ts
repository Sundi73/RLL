import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder , private http : HttpClient , private router : Router) {}
  public loginForm !: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username :[''],
      password : ['']
    })
  }

  login(){
    this.http.get<any>("https://www.google.com/")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
      });
      if(user){
        alert("Login Success!!");
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }else{
        alert("User Not Found");
      }
    },err => {
      alert("Something Went Wrong");
    })
  }

}