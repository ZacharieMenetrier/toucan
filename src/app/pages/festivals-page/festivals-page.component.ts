import { FestivalService } from '../../services/festival.service';
import { ContentService } from 'src/app/services/content.service';
import { ScreenService } from 'src/app/services/screen.service';
import { PrismicResult } from 'src/app/models/prismic-result';
import { PrismicText } from 'src/app/models/prismic-text';
import { ScreenSize } from 'src/app/models/screen-size';
import { PageComponent } from 'src/app/models/page';
import { Component, OnInit } from '@angular/core';
import { Festival } from '../../models/festival';
import { Observable, Subscription } from 'rxjs';

interface Content {
  card: [PrismicText];
  no_festival: [PrismicText];
}

@Component({
  selector: 'app-festivals-page',
  templateUrl: './festivals-page.component.html',
  styleUrls: ['./festivals-page.component.scss'],
})
export class FestivalsPageComponent extends PageComponent<Content> implements OnInit {

  public festivals: Observable<PrismicResult<Festival>[]>;
  public search = "";
  public columns: number;
  private _subscriptions = new Subscription();
  private _gridByBreakpoint = new Map<ScreenSize, number>([
    [ScreenSize.XL, 4],
    [ScreenSize.L, 4],
    [ScreenSize.M, 3],
    [ScreenSize.S, 2],
    [ScreenSize.XS, 1],
  ]);

  constructor(private _festivalService: FestivalService, public screenService: ScreenService, contentService: ContentService) {
    super(contentService, "festivals");
  }

  ngOnInit() {
    this.festivals = this._festivalService.getAllFestivals();
    this._subscriptions.add(this.screenService.getScreen().subscribe(screen => {
      this.columns = this._gridByBreakpoint.get(screen);
    }));
  }

  trackByFn(_index: any, item: {key: string}) {    
    return item.key;
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    super.destroy();
  }

}
