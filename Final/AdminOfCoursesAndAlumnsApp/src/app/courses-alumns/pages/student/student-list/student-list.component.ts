import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { StudentEditDialogComponent } from '../student-edit-dialog/student-edit-dialog.component';
import { CoursesAlumnsService } from 'src/app/data/service/courses-alumns.service';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { Student } from 'src/app/courses-alumns/model/student';
import { Model } from 'src/app/courses-alumns/model/model.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styles: [
    `table {
      width: 100%;
    }`
  ]
})

export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'profile', 'gender', 'actions'];
  model: Model = {
    name: ''
  };
  
  dataSource:any;

  constructor(private coursesalumnsservices: CoursesAlumnsService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.coursesalumnsservices.getStudents()
                              .subscribe( students => {
                                this.dataSource = new MatTableDataSource( students );
                              });
  }

  addStudent(){
    const dialogRef = this.dialog.open(StudentEditDialogComponent, {
      width: '280px',
      data: null
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.getStudents();
          this.showSnackbar(`El alumno se ha registrado correctamente.`);
        }
      }
    )
  }

  edit(student: Student){
    const dialogRef = this.dialog.open(StudentEditDialogComponent, {
      width: '280px',
      data: student
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.getStudents();
          this.showSnackbar(`La información de ${student.name} ha sido actualizada.`);
        }
      }
    )
  }

  delete(student: Student){
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '280px',
      data: this.model
    })
    dialog.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.coursesalumnsservices.deleteStudent(student.id)
          .subscribe( students => {
            this.getStudents();
            this.showSnackbar(`El usuario ${student.name} ha sido eliminado.`);
          } )
        }
      }
    )
  }

  showSnackbar(mensaje: string):void{
    this._snackBar.open(mensaje, 'Ok', {
      duration: 2450
    }).afterDismissed().subscribe(info => {
      if (info.dismissedByAction === true) {
        window.location.reload();
      }
    });
  }
}
