import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  @Input() public text: string;
  @Input() public color: string;
  
  @Input() 
  set appHighlight(highlight: string) { 
    const color = this.color || "yellow";
    highlight = highlight.toLowerCase();
    highlight = highlight.replace(/ /g, '');   
    let html = "";
    for (const c of this.text.toLowerCase()) {
      let cc = highlight[0];
      let isCharFound = false;
      if (c == cc) {
        highlight = highlight.slice(1);
        isCharFound = true;
      }
      if (!isCharFound) {
        html += c.toUpperCase();
      } else {
        html += '<span style="color: ' + color + ';">' + c.toUpperCase() + '</span>';
      }
    }
    if (highlight == "") {
      this._el.nativeElement.innerHTML = html;
    } else {
      this._el.nativeElement.innerHTML = this.text.toUpperCase();

    }
  }
  
  constructor(private _el: ElementRef) { }
  
}
