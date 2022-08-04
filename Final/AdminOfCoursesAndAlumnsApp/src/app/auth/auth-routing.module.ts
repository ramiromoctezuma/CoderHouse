import { Routes, RouterModule } from '@angular/router';
import { NgModule             } from '@angular/core';

import { RegistroComponent    } from './pages/registro/registro.component';
import { LoginComponent       } from './pages/login/login.component';

const routes: Routes = [
  {
    path:     '',
    children: [
      {
        path:      'login',
        component: LoginComponent
      },
      {
        path:      'registro',
        component: RegistroComponent
      },
      {
        path:       '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
