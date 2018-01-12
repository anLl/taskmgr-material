import { NgModule } from '@angular/core';
import { DemoAnimations1Component } from './demo-animations1/demo-animations1.component';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DemoRoutingModule
  ],
  declarations: [DemoAnimations1Component]
})
export class DemoModule { }
