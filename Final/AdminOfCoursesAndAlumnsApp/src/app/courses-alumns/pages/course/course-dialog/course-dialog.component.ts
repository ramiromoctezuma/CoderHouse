import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/courses-alumns/model/student';
import { CoursesAlumnsService } from '../../../../data/service/courses-alumns.service';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  movType: string = '';

  formulario: FormGroup = this.fb.group({
    name:           ['', [Validators.required, Validators.minLength(1)]],
    hquantity:      ['', [Validators.required,]],
    cquantity:      ['', [Validators.required]],
    assignedtecher: ['', [Validators.required, Validators.minLength(2)]],
    idCourse:       ['', []]
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<CourseDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Course,
              private coursesAlumnsService: CoursesAlumnsService) 
  {
    if (data === null) {
      this.movType = 'add';
    } else {
      this.movType = 'edit';
      this.formulario = fb.group({
        name:           [data.name,           [Validators.required, Validators.minLength(1)]],
        hquantity:      [data.hquantity,      [Validators.required,]],
        cquantity:      [data.cquantity,      [Validators.required]],
        assignedtecher: [data.assignedtecher, [Validators.required, Validators.minLength(2)]],
        idCourse:       [data.idCourse,       []]
      })
    } 
  }

  ngOnInit(): void {
  }

  validateField(campo: string) {
    return this.formulario.controls[campo].errors
        && this.formulario.controls[campo].touched
  }

  addCourse(){
    this.coursesAlumnsService.addCourse(this.formulario.value).subscribe(res => {
      this.dialogRef.close(true);
    })
  }

  updateCourse(){
    this.coursesAlumnsService.editCourse(this.formulario.value).subscribe(res => {
      this.dialogRef.close(true);
    });
  }

  close(){
    this.dialogRef.close();
  }

}
