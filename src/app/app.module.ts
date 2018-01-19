import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskModule } from './task/task.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';

import { DemoModule } from './demo/demo.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    TaskModule,
    LoginModule,
    ProjectModule,
    CoreModule,
    DemoModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
