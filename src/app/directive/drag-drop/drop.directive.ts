import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-droppable][dropCalss]'
})
export class DropDirective {

  @Input() dropCalss:string;

  constructor(private el: ElementRef, private rd: Renderer2) { }


  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.rd.addClass(this.el.nativeElement, this.dropCalss)
    }
  }
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.rd.addClass(this.el.nativeElement, this.dropCalss)
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dropCalss)
    }
  }
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    if (this.el.nativeElement == ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dropCalss)
    }
  }

}
