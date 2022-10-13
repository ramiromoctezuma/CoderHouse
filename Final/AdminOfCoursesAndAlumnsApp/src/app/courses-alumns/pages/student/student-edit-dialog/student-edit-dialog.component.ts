import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/courses-alumns/model/student';
import { CoursesAlumnsService } from '../../../../data/service/courses-alumns.service';

interface genericModel {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-student-edit-dialog',
  templateUrl: './student-edit-dialog.component.html',
  styleUrls: ['./student-edit-dialog.component.css']
})
export class StudentEditDialogComponent implements OnInit {

  movType: string = '';

  alumns: genericModel[] = [
    {value: '1', viewValue: 'Desarrollador'},
    {value: '2', viewValue: 'IT'},
    {value: '3', viewValue: 'Usuario Final'},
  ];

  genders: genericModel[] = [
    {value: '0', viewValue: 'Hombre'},
    {value: '1', viewValue: 'Mujer'},
  ];

  formulario: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName:  ['', [Validators.required, Validators.minLength(2)]],
    profile:   ['', []],
    gender:    ['', [Validators.required, Validators.minLength(1)]],
    id:        ['', []],
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<StudentEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Student,
              private coursesAlumnsService: CoursesAlumnsService) 
  {
    if (data === null) {
      this.movType = 'add';
    } else {
      this.movType = 'edit';
      this.formulario = fb.group({
        firstName: [data.name.firstName, [Validators.required, Validators.minLength(2)]],
        lastName:  [data.name.lastName,  [Validators.required, Validators.minLength(2)]],
        profile:   [data.profile,        []],
        gender:    [data.gender,         [Validators.required, Validators.minLength(1)]],
        id:        [data.id,             []]
      })
    } 
  }

  ngOnInit(): void {
  }

  validateField(campo: string) {
    return this.formulario.controls[campo].errors
        && this.formulario.controls[campo].touched
  }

  addStudent(){
    this.coursesAlumnsService.addStudent(this.formulario.value).subscribe(res => {
      this.dialogRef.close(true);
    })
  }

  updateStudent(){
    this.coursesAlumnsService.editStudent(this.formulario.value).subscribe(res => {
      this.dialogRef.close(true);
    });
  }

  close(){
    this.dialogRef.close();
  }

}
