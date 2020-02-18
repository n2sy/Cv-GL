import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg = "green";
  @HostBinding('style.color') txtcolor = "red";

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.bg = "pink";
    this.txtcolor = "grey";
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg = "green";
    this.txtcolor = "red";
  }

}
