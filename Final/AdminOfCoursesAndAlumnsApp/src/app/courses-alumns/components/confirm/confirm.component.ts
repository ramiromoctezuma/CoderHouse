import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit     } from '@angular/core';
import { Model                         } from '../../model/model.interface';

@Component({
  selector:     'app-confirm',
  templateUrl:  './confirm.component.html',
  styleUrls:   ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>,
                                 @Inject(MAT_DIALOG_DATA) public data: Model) { }

  ngOnInit(): void {
  }

  delete(){
    this.dialogRef.close(true);
  }

  close(){
    this.dialogRef.close();
  }
}
