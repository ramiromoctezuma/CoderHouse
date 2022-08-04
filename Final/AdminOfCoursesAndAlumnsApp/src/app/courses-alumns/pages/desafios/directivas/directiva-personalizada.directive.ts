import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada]'
})
export class DirectivaPersonalizadaDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 
    renderer.setStyle(elementRef.nativeElement,'background-color','	#ADD8E6')
  }

}
