import { Component, OnInit } from '@angular/core';

import { MatTableDataSource   } from '@angular/material/table';
import { MatSnackBar          } from '@angular/material/snack-bar';
import { MatDialog            } from '@angular/material/dialog';

import { InscriptionDialogComponent } from '../inscription-dialog/inscription-dialog.component';
import { CoursesAlumnsService    } from 'src/app/data/service/courses-alumns.service';
import { ConfirmComponent        } from 'src/app/shared/confirm/confirm.component';
import { Model                   } from 'src/app/courses-alumns/model/model.interface';
import { User                    } from '../../../model/user';
import { Inscription } from '../../../model/inscription';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styles: [
    `table {
      width: 100%;
    }`
  ]
})
export class InscriptionListComponent implements OnInit {
  tu: string;
  movType: string = '';

  
  displayedColumns: string[] =[]
  
  model: Model = {
    name: ''
  }

  dataSource:any;
  courses:any;
  alumns: any;
  users: any;
  constructor(private coursesalumnsservices: CoursesAlumnsService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { 
      this.tu = localStorage.getItem('tu')!;
    }

  ngOnInit(): void {
    if(this.tu === 'admin' || this.tu === 'user') {
      this.displayedColumns = ['idAlmun', 'idCourse', 'registrationDate', 'idUser', 'actions'];
    }else{
      this.displayedColumns = ['idAlmun', 'idCourse', 'registrationDate', 'idUser'];
    }
    this.getIncriptions();
    this.getCourses();
    this.getAlumns();
    this.getUsers();
  }

  getCourses(){
    this.coursesalumnsservices.getCourses()
                              .subscribe( courses => {
                                this.courses = courses;
                              })
  }

  getIncriptions(){
    this.coursesalumnsservices.getInscriptions()
                              .subscribe( inscriptions => {
                                this.dataSource = new MatTableDataSource( inscriptions );
                              })
  }

  getAlumns(){
    this.coursesalumnsservices.getStudents().
                              subscribe( alumns => {
                                this.alumns = alumns;
                              })
  }

  getUsers(){
    this.coursesalumnsservices.getUsers()
                              .subscribe( users => {
                                this.users = users;
                              })
  }

  addInscription(){
    const dialogRef = this.dialog.open(InscriptionDialogComponent, {
      width: '280px',
      data: null
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.getIncriptions();
          this.showSnackbar(`La inscripción se ha registrado correctamente.`);
        }
      }
    )
  }

  edit(user: User){
    const dialogRef = this.dialog.open(InscriptionDialogComponent, {
      width: '280px',
      data: user
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.getIncriptions();
          this.showSnackbar(`La información de ${user.name} ha sido actualizada.`);
        }
      }
    )
  }

  delete(inscription: Inscription){
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '280px',
      data: this.model
    })
    dialog.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.coursesalumnsservices.deleteInscription(inscription.idInscription)
          .subscribe( inscriptions => {
            this.getIncriptions();
            this.showSnackbar(`El registro ${inscription.idCourse} ha sido eliminado.`);
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
