import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[rbSelectionItem]'
})
export class SelectionItemDirective implements OnInit{
  @Input('rbSelectionItem') selectionColor = 'red';
  private bgColor:string = this.selectionColor;
  @HostBinding('style.background') get setColor(){
    return this.bgColor;
  }

  ngOnInit(){
    this.bgColor = this.selectionColor;
  }
}
