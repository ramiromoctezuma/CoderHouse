import { Component, OnInit    } from '@angular/core';
  
import { MatTableDataSource   } from '@angular/material/table';
import { MatDialog            } from '@angular/material/dialog';

import { CoursesAlumnsService } from 'src/app/data/service/courses-alumns.service';
import { ConfirmComponent     } from '../../../components/confirm/confirm.component';
import { MatSnackBar          } from '@angular/material/snack-bar';
import { Model                } from 'src/app/courses-alumns/model/model.interface';
import { User                 } from '../../../model/user';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `table {
      width: 100%;
    }`
  ]
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'address', 'phone', 'profile', 'actions'];
  
  model: Model = {
    name: ''
  }

  dataSource:any;

  constructor(private coursesalumnsservices: CoursesAlumnsService,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.coursesalumnsservices.getUsers()
                              .subscribe( usuarios => {
                                this.dataSource = new MatTableDataSource( usuarios );
                              })
  }

  addUser(){
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '280px',
      data: null
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.getUsers();
          this.showSnackbar(`El usuario se ha registrado correctamente.`);
        }
      }
    )
  }

  edit(user: User){
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '280px',
      data: user
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.getUsers();
          this.showSnackbar(`La información de ${user.name} ha sido actualizada.`);
        }
      }
    )
  }

  delete(user: User){
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '280px',
      data: this.model
    })
    dialog.afterClosed().subscribe(
      (res) => {
        if (res) {
          this.coursesalumnsservices.deleteUser(user.id)
          .subscribe( usuarios => {
            this.getUsers();
            this.showSnackbar(`El usuario ${user.name} ha sido eliminado.`);
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
