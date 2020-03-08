import { ContentService } from 'src/app/services/content.service';
import { PrismicText } from 'src/app/models/prismic-text';
import { PageComponent } from 'src/app/models/page';
import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

interface Content {
  card: [PrismicText];
  paragraphs: [{
    title: string;
    text: [PrismicText];
    image: { url: string };
  }];
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent extends PageComponent<Content> implements OnInit {

  constructor(contentService: ContentService, public screenService: ScreenService) {
    super(contentService, "about");
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    super.destroy();
  }

}
