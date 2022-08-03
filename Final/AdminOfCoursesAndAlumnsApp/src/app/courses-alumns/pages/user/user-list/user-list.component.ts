import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CoursesAlumnsService } from 'src/app/data/service/courses-alumns.service';
import { User } from '../../../model/user';
import { ConfirmComponent } from '../../../components/confirm/confirm.component';
import { Model } from 'src/app/courses-alumns/model/model.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  edit(user: User){
    this.coursesalumnsservices.editUser(user)
                              .subscribe( usuario => {
                                if (usuario != null) {
                                  this.getUsers();
                                }
                              } )
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
            this.showSnackbar(`El usuario ${user.name} ha sido eliminado.`);
            setTimeout(() => {  
              if (usuarios != null) {
                window.location.reload();
              }
             }, 2500);
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
