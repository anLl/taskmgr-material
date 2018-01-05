import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const svgRegistry = (ir:MatIconRegistry,ds:DomSanitizer)=>{
    const imgDir = `assets/img`;
    const daysDir = `${imgDir}/days`;
    const sidebarDir = `${imgDir}/sidebar`;
    ir.addSvgIcon('month',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
    ir.addSvgIcon('week',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
    ir.addSvgIcon('day',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
    ir.addSvgIcon('projects',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
}