import { Component } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkBoolen:boolean = false ;

  constructor(private oc:OverlayContainer){}
  switchTheme(dark){
    this.darkBoolen = dark;
    this.oc.getContainerElement().classList.add('my-dark-theme');
  }
}
