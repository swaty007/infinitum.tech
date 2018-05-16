import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[scrollTo]'
})
export class ScrollToDirective implements AfterViewInit {
  constructor(private elRef:ElementRef) {}
  @Input('scrollTo') work: boolean;
  ngAfterViewInit() {
    if (this.work == true) {
      this.elRef.nativeElement.scrollIntoView(true);
    }
  }
}
