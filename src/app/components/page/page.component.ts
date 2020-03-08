import { Component, OnInit, Input } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { ScreenSize } from 'src/app/models/screen-size';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public isPadding64px = true;

  constructor(private _screenService: ScreenService) { }

  ngOnInit() {
    this._screenService.getScreen().subscribe(screen => {
      this.isPadding64px = screen > ScreenSize.S;
    })
  }

}
