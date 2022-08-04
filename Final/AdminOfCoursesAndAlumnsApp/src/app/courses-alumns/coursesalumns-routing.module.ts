import { Routes, RouterModule } from '@angular/router';
import { NgModule             } from '@angular/core';

import { StudentListComponent } from './pages/student/student-list/student-list.component';
import { DesafiosComponent    } from './pages/desafios/desafios.component';
import { UserListComponent    } from './pages/user/user-list/user-list.component';
import { HomeComponent        } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'userlist', component: UserListComponent},
      {path: 'studentlist', component: StudentListComponent},
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
