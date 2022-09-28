import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA      } from '@angular/material/dialog';
import { Component, Inject, OnInit          } from '@angular/core';
import { CoursesAlumnsService               } from '../../../../data/service/courses-alumns.service';
import { User                               } from 'src/app/courses-alumns/model/user';

@Component({
  selector:     'app-user-edit-dialog',
  templateUrl:  './user-edit-dialog.component.html',
  styleUrls:   ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {

  movType: string = '';

  formulario: FormGroup = this.fb.group({
    email   : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    name:     ['', [Validators.required, Validators.minLength(2)]],
    address:  ['', [Validators.required, Validators.minLength(2)]],
    phone:    ['', [Validators.required, Validators.minLength(10)]],
    profile:  ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UserEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              private coursesAlumnsService: CoursesAlumnsService
  ) { 
    if (data === null) {
      this.movType = 'add';
    } else {
      this.movType = 'edit';
      this.formulario = fb.group({
        email:    [data.email,    [Validators.required, Validators.email]],
        password: [data.password, [Validators.required, Validators.minLength(4)]],
        name:     [data.name,     [Validators.required, Validators.minLength(4)]],
        address:  [data.address,  [Validators.required, Validators.minLength(2)]],
        phone:    [data.phone,    [Validators.required, Validators.minLength(10)]],
        profile:  [data.profile,  [Validators.required, Validators.minLength(2)]],
        id:       [data.id,       []]
      })
    }
  }
  ngOnInit(): void {
  }

  validateField(campo: string) {
    return this.formulario.controls[campo].errors
        && this.formulario.controls[campo].touched
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

  close(){
    this.dialogRef.close();
  }
}
