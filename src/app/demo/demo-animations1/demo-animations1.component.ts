import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-demo-animations1',
  templateUrl: './demo-animations1.component.html',
  styleUrls: ['./demo-animations1.component.scss'],
  animations: [
    trigger('square',
      [
        state('green', style({ 'background': 'green','transform': 'translateY(-100%)'})),
        state('red', style({ 'background': 'red', 'transform': 'translateY(100%)' })),
        transition("green => red", animate('1s cubic-bezier(0.68, -0.55, 0.265, 1.55)')),
        transition("red => green", animate(1000,keyframes([
          style({'transform':'translateY(100%)'}),
          style({'transform':'translateY(95%)'}),
          style({'transform':'translateY(90%)'}),
          style({'transform':'translateY(80%)'}),
          style({'transform':'translateY(60%)'}),
          style({'transform':'translateY(40%)'}),
          style({'transform':'translateY(10%)'}),
          style({'transform':'translateY(-10%)'}),
          style({'transform':'translateY(0%)'}),
          style({'transform':'translateY(-10%)'}),
          style({'transform':'translateY(-20%)'}),
          style({'transform':'translateY(-40%)'}),
          style({'transform':'translateY(-70%)'}),
          style({'transform':'translateY(-90%)'}),
          style({'transform':'translateY(-100%)'}),
        ]))),
      ]
    )
  ]
})
export class DemoAnimations1Component implements OnInit {

  squareState: string;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.squareState = this.squareState === 'green' ? 'red' : 'green'
  }

}
