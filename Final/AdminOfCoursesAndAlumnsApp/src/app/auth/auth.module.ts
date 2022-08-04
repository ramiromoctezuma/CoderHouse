import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule        } from '@angular/common';
import { NgModule            } from '@angular/core';

import { AuthRoutingModule   } from './auth-routing.module';
import { RegistroComponent   } from './pages/registro/registro.component';
import { LoginComponent      } from './pages/login/login.component';
import { MaterialModule      } from '../material/material.module';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule,
    CommonModule,
  ]
})
export class AuthModule { }
