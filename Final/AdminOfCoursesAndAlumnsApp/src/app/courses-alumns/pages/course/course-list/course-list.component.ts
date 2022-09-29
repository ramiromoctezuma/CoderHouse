import { Component, OnInit } from '@angular/core';

import { MatTableDataSource    } from '@angular/material/table';
import { MatSnackBar           } from '@angular/material/snack-bar';
import { MatDialog             } from '@angular/material/dialog';
 
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CoursesAlumnsService  } from 'src/app/data/service/courses-alumns.service';
import { ConfirmComponent      } from 'src/app/shared/confirm/confirm.component';
import { Course                } from '../../../model/course';
import { Model                 } from 'src/app/courses-alumns/model/model.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styles: [
    `table {
      width: 100%;
    }`
  ]
})

export class CourseListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'hquantity', 'cquantity', 'assignedtecher', 'actions'];
  model: Model = {
    name: ''
  }

  dataSource:any;

  constructor(private coursesalumnsservices: CoursesAlumnsService,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.coursesalumnsservices.getCourses()
                              .subscribe( courses => {
                                this.dataSource = new MatTableDataSource( courses );
                              })
  }

  addCourse(){
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '280px',
      data: null
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.getCourses();
          this.showSnackbar(`El curso se ha registrado correctamente.`);
        }
      }
    )
  }

  edit(course: Course){
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '280px',
      data: course
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.getCourses();
          this.showSnackbar(`La información de ${course.name} ha sido actualizada.`);
        }
      }
    )
  }

  delete(course: Course){
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '280px',
      data: this.model
    })
    dialog.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.coursesalumnsservices.deleteCourse(course.idCourse)
          .subscribe( curses => {
            this.getCourses();
            this.showSnackbar(`El usuario ${course.name} ha sido eliminado.`);
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
