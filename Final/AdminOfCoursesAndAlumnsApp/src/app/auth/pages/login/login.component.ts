import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interfaces';
import { User } from '../../../courses-alumns/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Auth = {
    email:    '',
    password: '',
    name:     '',
    address:  '',
    phone:    0,
    profile:  '',
    id:   0

  }

  loginForm: FormGroup = this.fb.group({
    email   : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor( private router: Router,
               private authService: AuthService,
               private fb: FormBuilder) { }
  
  validateEmail(campo: string) {
    return this.loginForm.controls[campo].errors
      && this.loginForm.controls[campo].touched
  }

  validatePass(campo: string) {
    return this.loginForm.controls[campo].errors
      && this.loginForm.controls[campo].touched
  }

  login(){
    this.authService.login(this.loginForm.value)
  }

}
