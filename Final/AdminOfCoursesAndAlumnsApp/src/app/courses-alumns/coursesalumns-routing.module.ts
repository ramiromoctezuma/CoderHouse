import { Routes, RouterModule } from '@angular/router';
import { NgModule             } from '@angular/core';

import { StudentListComponent } from './pages/student/student-list/student-list.component';
import { CourseListComponent  } from './pages/course/course-list/course-list.component';
import { UserListComponent    } from './pages/user/user-list/user-list.component';
import { HomeComponent        } from '../core/components/home/home.component';
import { InscriptionListComponent } from './pages/inscription/inscription-list/inscription-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'userlist', component: UserListComponent},
      {path: 'studentlist', component: StudentListComponent},
      {path: 'courselist', component: CourseListComponent},
      {path: 'listinscription', component: InscriptionListComponent},

      {path: '**', redirectTo: 'home'}
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
