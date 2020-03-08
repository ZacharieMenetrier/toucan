import { Directive, Input, ElementRef } from '@angular/core';
import { PrismicText } from '../models/prismic-text';
import PrismicDOM from 'prismic-dom';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  @Input() 
  set appText(prismicTexts: PrismicText[]) {    
    if (!prismicTexts) return;
    const html = PrismicDOM.RichText.asHtml(prismicTexts, (doc) => null);
    this._el.nativeElement.innerHTML = html;
  }

  constructor(private _el: ElementRef) { }

}
