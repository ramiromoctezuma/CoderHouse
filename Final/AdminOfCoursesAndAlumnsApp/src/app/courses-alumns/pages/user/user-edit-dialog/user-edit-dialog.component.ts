import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA       } from '@angular/material/dialog';
import { Component, Inject, OnInit           } from '@angular/core';

import { CoursesAlumnsService                } from '../../../../data/service/courses-alumns.service';
import { User                                } from 'src/app/courses-alumns/model/user';

@Component({
  selector:     'app-user-edit-dialog',
  templateUrl:  './user-edit-dialog.component.html',
  styleUrls:   ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {

  formulario: FormGroup;
  movType: string = '';

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UserEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              private coursesAlumnsService: CoursesAlumnsService
  ) { 
    if (data === null) {
      this.movType = 'add';
      this.formulario = fb.group({
        email:    '',
        password: '',
        name:     '',
        address:  '',
        phone:    '',
        profile:  '',
        id:       '',
      })
    } else {
      this.movType = 'edit';
      this.formulario = fb.group({
        email:    new FormControl(data.email),
        password: new FormControl(data.password),
        name:     new FormControl(data.name),
        address:  new FormControl(data.address),
        phone:    new FormControl(data.phone),
        profile:  new FormControl(data.profile),
        id:       new FormControl(data.id),
      })
    }
    
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  addUser(){
    this.coursesAlumnsService.addUser(this.formulario.value).subscribe(res => {
      this.dialogRef.close(true);
    })
  }

  updateUser(){
    this.coursesAlumnsService.editUser(this.formulario.value).subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
