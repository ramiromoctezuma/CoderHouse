import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email   : ['', [Validators.required]],
    password: ['', [Validators.minLength(8)]]
  });

  constructor( private router: Router,
               private authService: AuthService,
               private fb: FormBuilder) { }

  login(){
    this.authService.login()
                    .subscribe(resp => {
                      console.log(resp);
                      if(resp.id){
                        this.router.navigate(['/'])
                      }
                    })
  }

}
