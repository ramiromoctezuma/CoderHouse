import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule              } from '@angular/material/core';
import { CommonModule                     } from '@angular/common';
import { NgModule                         } from '@angular/core';

import { DirectivaPersonalizadaDirective  } from './pages/desafios/directivas/directiva-personalizada.directive';
import { CoursesalumnsRoutingModule       } from './coursesalumns-routing.module';
import { StudentEditDialogComponent       } from './pages/student/student-edit-dialog/student-edit-dialog.component';
import { UserEditDialogComponent          } from './pages/user/user-edit-dialog/user-edit-dialog.component';
import { StudentListComponent             } from './pages/student/student-list/student-list.component';
import { DesafiosComponent                } from './pages/desafios/desafios.component';
import { UserListComponent                } from './pages/user/user-list/user-list.component';
import { ConfirmComponent                 } from './components/confirm/confirm.component';
import { MaterialModule                   } from '../material/material.module';
import { HomeComponent                    } from './pages/home/home.component';
import { NamesPipe } from './pipes/names.pipe';
import { FontSizeDirective } from './directives/font-size.directive';


@NgModule({
  declarations: [
    DirectivaPersonalizadaDirective,
    UserEditDialogComponent,
    StudentListComponent,
    DesafiosComponent,
    UserListComponent,
    ConfirmComponent,
    HomeComponent,
    StudentEditDialogComponent,
    NamesPipe,
    FontSizeDirective,
  ],
  imports: [
    CoursesalumnsRoutingModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
  ]
})
export class CoursesalumnsModule { }
