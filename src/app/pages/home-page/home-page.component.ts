import { FestivalService } from 'src/app/services/festival.service';
import { ContentService } from 'src/app/services/content.service';
import { ScreenService } from 'src/app/services/screen.service';
import { PrismicResult } from 'src/app/models/prismic-result';
import { PrismicText } from 'src/app/models/prismic-text';
import { ScreenSize } from 'src/app/models/screen-size';
import { PageComponent } from 'src/app/models/page';
import { Festival } from 'src/app/models/festival';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Content {
  title: string;
  baseline: string;
  card: [PrismicText];
  search_text: [PrismicText]
  see_festivals: [PrismicText];
  see_missions: [PrismicText];
  image: { url: string };
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends PageComponent<Content> implements OnInit {
  
  public festivals: Observable<PrismicResult<Festival>[]>;
  public areButtonsCollapsed = false;
  public listSelection = 0;
  public imageNumber = 0;
  public search = "";
  
  constructor(private _festivalService: FestivalService, contentService: ContentService, public screenService: ScreenService) {
    super(contentService, "home");
  }
  
  ngOnInit() {
    this.festivals = this._festivalService.getAllFestivals();
    this.screenService.getScreen().subscribe(screen => {
      this.areButtonsCollapsed = screen < ScreenSize.M;
    });
  }

  trackByFn(_index: any, item: {key: string}) {    
    return item.key;
  }
  
  onNavigateList(upOrDown: string) {
    if (upOrDown == "ArrowUp") this.listSelection -= 1;
    if (upOrDown == "ArrowDown") this.listSelection += 1;
    if (this.listSelection < 0) this.listSelection = 0;    
  }

  blur() {
    setTimeout(() => {
      this.search = "";
    }, 100);
  }

  ngOnDestroy() {
    super.destroy();
  }

}
