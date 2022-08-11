import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnInit{
  @Input('appFontSize') fontSize!: number;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.fontSize= (this.fontSize)+"pt";
    // this.element.nativeElement.style.fontSize = this.headers;
  }
}
