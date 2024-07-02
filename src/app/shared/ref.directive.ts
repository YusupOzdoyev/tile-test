import { Directive, ElementRef, EventEmitter, HostListener, Output, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRef]'
})
export class RefDirective {
  ViewContainerRef: any;

  constructor(
    public containerRef: ViewContainerRef
  ) {}

}
