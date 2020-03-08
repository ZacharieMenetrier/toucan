import { FestivalService } from 'src/app/services/festival.service';
import { ScreenService } from 'src/app/services/screen.service';
import { PrismicResult } from 'src/app/models/prismic-result';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScreenSize } from 'src/app/models/screen-size';
import { Festival } from 'src/app/models/festival';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-festival-page',
  templateUrl: './festival-page.component.html',
  styleUrls: ['./festival-page.component.scss'],
})
export class FestivalPageComponent implements OnInit, OnDestroy {
  
  public festival: PrismicResult<Festival>;
  public isPosterCollapsed = false;
  public isButtonCollpsed = false;
  private _subscriptions = new Subscription();
  
  constructor(private _festivalService: FestivalService, public screenService: ScreenService, private _route: ActivatedRoute) { }
  
  ngOnInit() {
    this._subscriptions.add(this._route.params.pipe(
      mergeMap(params => this._festivalService.getFestival(params.id))
    ).subscribe(festival => {
      this.festival = festival;
    }));
    this._subscriptions.add(this.screenService.getScreen().subscribe(screen => {
      this.isPosterCollapsed = screen < ScreenSize.M;
      this.isButtonCollpsed = screen < ScreenSize.M;
    }));
  }
  
  public getSocialNetworkIcon(networkUrl: string) {
    // if (networkUrl.search("facebook") != -1) return "facebook";
    // if (networkUrl.search("twitter") != -1) return "twitter";
    // if (networkUrl.search("instagram") != -1) return "instagram";
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
  
}
