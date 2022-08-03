import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { DesafiosComponent } from './pages/desafios/desafios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'userlist', component: UserListComponent},
      {path: 'desafio', component: DesafiosComponent},

      {path: '**', redirectTo: 'desafio'}
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
export class CoursesalumnsRoutingModule { }
