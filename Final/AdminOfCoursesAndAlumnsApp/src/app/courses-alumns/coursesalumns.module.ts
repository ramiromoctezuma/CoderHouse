import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule              } from '@angular/material/core';
import { CommonModule                     } from '@angular/common';
import { NgModule                         } from '@angular/core';

import { DirectivaPersonalizadaDirective  } from './pages/desafios/directivas/directiva-personalizada.directive';
import { CoursesalumnsRoutingModule       } from './coursesalumns-routing.module';
import { UserEditDialogComponent          } from './pages/user/user-edit-dialog/user-edit-dialog.component';
import { DesafiosComponent                } from './pages/desafios/desafios.component';
import { UserListComponent                } from './pages/user/user-list/user-list.component';
import { ConfirmComponent                 } from './components/confirm/confirm.component';
import { MaterialModule                   } from '../material/material.module';
import { HomeComponent                    } from './pages/home/home.component';


@NgModule({
  declarations: [
    DirectivaPersonalizadaDirective,
    UserEditDialogComponent,
    ConfirmComponent,
    DesafiosComponent,
    UserListComponent,
    HomeComponent,
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
