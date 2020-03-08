import { ContentService } from 'src/app/services/content.service';
import { PrismicText } from 'src/app/models/prismic-text';
import { PageComponent } from 'src/app/models/page';
import { Component, OnInit } from '@angular/core';

interface Content {
  text: [PrismicText];
}

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent extends PageComponent<Content> implements OnInit {

  constructor(contentService: ContentService) {
    super(contentService, "contact");
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    super.destroy();
  }

}
