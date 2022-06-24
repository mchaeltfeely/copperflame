import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConnectService } from 'src/app/app-connect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;
  
  constructor(private fb: FormBuilder,public _router:Router, public as:AppConnectService) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(){
    this.loginForm = new FormGroup({
      username:new FormControl('', Validators.email),
      password:new FormControl('', Validators.required)
    })
  }

  login(){
    this.as.signIn().subscribe((res:any) => {
      localStorage.setItem('token', res.accessToken);
      this._router.navigateByUrl("dashboard");
    });

    
  }

}
