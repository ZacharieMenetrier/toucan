import { PrismicResult } from 'src/app/models/prismic-result';
import { Festival } from 'src/app/models/festival';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-festival-card',
  templateUrl: './festival-card.component.html',
  styleUrls: ['./festival-card.component.scss'],

})
export class FestivalCardComponent {

  @Input() festival: PrismicResult<Festival>;
  @Input() highlight: string;

  constructor() { }



}
