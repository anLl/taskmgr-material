import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private mdf:MatDialogRef<NewProjectComponent>
  ) { }

  ngOnInit() {
    console.log(this.data.dark)
  }
  onSave(){
    this.mdf.close('I received your message');
  }

}
