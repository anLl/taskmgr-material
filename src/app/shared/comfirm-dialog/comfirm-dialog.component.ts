import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-comfirm-dialog',
  template: `
    <h3>{{title}}</h3>
    <mat-dialog-content>
        <p>{{content}}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button type='button' mat-raised-button color='primary' (click)='onClick(true)'>
        <span>确认</span>
      </button>
      <button type='button' mat-raised-button mat-dialog-close (click)='onClick(false)'>
        <span>取消</span>
      </button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class ComfirmDialogComponent implements OnInit {

  title:string;
  content:string;
  constructor(@Inject(MAT_DIALOG_DATA) private data, private dialogRef:MatDialogRef<ComfirmDialogComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  onClick(result:boolean){
    this.dialogRef.close(result);
  }

}
