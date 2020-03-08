import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FestivalService } from './services/festival.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ScreenService } from './services/screen.service';
import { PrismicResult } from './models/prismic-result';
import { Festival } from './models/festival';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'toucan';
  public search = "";
  public isMobileSearchOpened = false;
  public isMobileNavigationMenuOpened = false;
  public festivals: Observable<PrismicResult<Festival>[]>;
  @ViewChild("mobileSearchBar", { static: false }) private _mobileSearchBar: SearchBarComponent;

  constructor(public screenService: ScreenService, private _festivalService: FestivalService) { }

  ngOnInit() {
    this.festivals = this._festivalService.getAllFestivals();
  }

  activateMobileSearch() {
    this.isMobileNavigationMenuOpened = false;
    this.search = "";
    this.isMobileSearchOpened = true;
    setTimeout(() => {
      this._mobileSearchBar.focus();
    }, 0);
  }

  closeMobileSearch() {
    setTimeout(() => {
      this.search = "";
      this.isMobileSearchOpened = false;
    }, 0);
  }

  toggleNavigationMobileMenu() {
    this.isMobileNavigationMenuOpened = !this.isMobileNavigationMenuOpened;
    if (this.isMobileNavigationMenuOpened) {
      this.search = "";
      this.isMobileSearchOpened = false;
    }
  }

}
