import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient,private router : Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        fullname : [''],
        email : [''],
        username : [''],
        password : [''],
        number : ['']
    })
  }
  register(){
    this.http.post<any>("https://www.google.com ",this.registerForm.value)
    .subscribe(res=>{
      alert("Signup is Sucessfull!!");
      this.registerForm.reset();
      this.router.navigate(['dasboard'])
    },err=>{
        alert('Something went Wrong');
    })
  }

}
