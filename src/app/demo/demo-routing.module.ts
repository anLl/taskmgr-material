import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoAnimations1Component } from './demo-animations1/demo-animations1.component';

const routes: Routes = [
  { path: 'demo', component: DemoAnimations1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule { }

export const routedComponents = [DemoAnimations1Component];