import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkBoolen:boolean = false ;

  switchTheme(dark){
    this.darkBoolen = dark
  }
}
