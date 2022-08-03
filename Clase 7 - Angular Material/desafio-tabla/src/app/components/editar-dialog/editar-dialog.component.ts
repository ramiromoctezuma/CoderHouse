import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb:FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

}
