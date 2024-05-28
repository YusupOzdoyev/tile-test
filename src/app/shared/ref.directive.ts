import { Directive, ElementRef, EventEmitter, HostListener, Output, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRef]'
})
export class RefDirective {

  constructor(
    public containerRef: ViewContainerRef
  ) {}

}
