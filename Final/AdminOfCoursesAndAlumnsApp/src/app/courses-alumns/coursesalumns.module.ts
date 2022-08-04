import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CoursesalumnsRoutingModule } from './coursesalumns-routing.module';
import { MaterialModule } from '../material/material.module';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DesafiosComponent } from './pages/desafios/desafios.component';
import { UserEditDialogComponent } from './pages/user/user-edit-dialog/user-edit-dialog.component';
import { DirectivaPersonalizadaDirective } from './pages/desafios/directivas/directiva-personalizada.directive';



@NgModule({
  declarations: [
    UserListComponent,
    HomeComponent,
    ConfirmComponent,
    DesafiosComponent,
    UserEditDialogComponent,
    DirectivaPersonalizadaDirective
  ],
  imports: [
    CommonModule,
    CoursesalumnsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ]
})
export class CoursesalumnsModule { }
