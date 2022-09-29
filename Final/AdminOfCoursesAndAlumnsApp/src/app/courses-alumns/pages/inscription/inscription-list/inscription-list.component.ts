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

  movType: string = '';

  displayedColumns: string[] = ['idAlmun', 'idCourse', 'registrationDate', 'idUser', 'actions'];
  
  model: Model = {
    name: ''
  }

  dataSource:any;
  constructor(private coursesalumnsservices: CoursesAlumnsService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getIncriptions();
  }

  
  getIncriptions(){
    this.coursesalumnsservices.getInscriptions()
                              .subscribe( inscriptions => {
                                this.dataSource = new MatTableDataSource( inscriptions );
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
