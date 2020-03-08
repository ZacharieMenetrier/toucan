import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { PrismicText } from 'src/app/models/prismic-text';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() public text: PrismicText;

  constructor() { }

  ngOnInit() {
  }

}
