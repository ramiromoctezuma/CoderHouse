import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA      } from '@angular/material/dialog';
import { Component, Inject, OnInit          } from '@angular/core';
import { CoursesAlumnsService               } from '../../../../data/service/courses-alumns.service';
import { User                               } from 'src/app/courses-alumns/model/user';
import { Inscription } from '../../../model/inscription';

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrls: ['./inscription-dialog.component.css']
})
export class InscriptionDialogComponent implements OnInit {

  movType: string = '';

  formulario: FormGroup = this.fb.group({
    idInscription:    [''],
    idAlmun:          ['', [Validators.required]],
    idCourse:         ['', [Validators.required]],
    registrationDate: ['', [Validators.required]],
    idUser:           ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<InscriptionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Inscription,
              private coursesAlumnsService: CoursesAlumnsService
  ) {
    if (data === null) {
      this.movType = 'add';
    } else {
      this.movType = 'edit';
      this.formulario = fb.group({
        idInscription:     [data.idInscription],
        idAlmun:           [data.idAlmun, [Validators.required]],
        idCourse:          [data.idCourse, [Validators.required]],
        registrationDate:  [data.registrationDate, [Validators.required]],
        idUser:            [data.idUser, [Validators.required]],
      })
    }
  }

  ngOnInit(): void {
  }

  validateField(campo: string) {
    return this.formulario.controls[campo].errors
        && this.formulario.controls[campo].touched
  }

  addInscription(){
    this.coursesAlumnsService.addInscription(this.formulario.value).subscribe(res => {
      this.dialogRef.close(true);
    })
  }

  updateInscription(){
    this.coursesAlumnsService.editInscription(this.formulario.value).subscribe(res => {
      this.dialogRef.close(true);
    });
  }

  close(){
    this.dialogRef.close();
  }

}
