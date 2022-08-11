import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/courses-alumns/model/student';
import { CoursesAlumnsService } from '../../../../data/service/courses-alumns.service';
import { Name } from '../../../model/student';

@Component({
  selector: 'app-student-edit-dialog',
  templateUrl: './student-edit-dialog.component.html',
  styleUrls: ['./student-edit-dialog.component.css']
})
export class StudentEditDialogComponent implements OnInit {

  formulario: FormGroup;
  movType: string = '';

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<StudentEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Student,
              private coursesAlumnsService: CoursesAlumnsService) 
  {
    if (data === null) {
      this.movType = 'add';
      this.formulario = fb.group({
        firstName: '',
        lastName: '',
        profile:  '',
        gender:    '',
        id:       '',
      })
    } else {
      this.movType = 'edit';
      this.formulario = fb.group({
        firstName:     new FormControl(data.name.firstName),
        lastName:     new FormControl(data.name.lastName),
        profile:  new FormControl(data.profile),
        gender:    new FormControl(data.gender),
        id:       new FormControl(data.id),
      })
    }
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
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

}
