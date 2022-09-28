import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component                          } from '@angular/core';
import { Router                             } from '@angular/router';

import { AuthService                        } from '../../services/auth.service';
import { Auth                               } from '../../interfaces/auth.interfaces';

@Component({
  selector:     'app-login',
  templateUrl:  './login.component.html',
  styleUrls:   ['./login.component.css']
})
export class LoginComponent {

  user: Auth = {
    email:    '',
    password: '',
    name:     '',
    address:  '',
    phone:    0,
    profile:  '',
    id:       0

  }

  loginForm: FormGroup = this.fb.group({
    email   : ['user1@coderhouse.com', [Validators.required, Validators.email]],
    password: ['1234', [Validators.required, Validators.minLength(4)]]
  });

  constructor( private router:      Router,
               private authService: AuthService,
               private fb:          FormBuilder) { }
  
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
