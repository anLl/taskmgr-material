import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { svgRegistry } from '../utils/svg.utils'
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent,AppRoutingModule],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule, ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在,不能再次加载');
    }
    svgRegistry(ir, ds);
  }
}
