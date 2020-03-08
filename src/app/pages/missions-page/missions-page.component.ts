import { MissionComponent } from 'src/app/components/mission/mission.component';
import { PageComponent } from 'src/app/models/page';
import { ContentService } from 'src/app/services/content.service';
import { ScreenService } from 'src/app/services/screen.service';
import { PrismicText } from 'src/app/models/prismic-text';
import { ScreenSize } from 'src/app/models/screen-size';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

interface Content {
  card: [PrismicText];
  missions : Mission[];
}

export interface Mission {
  name: string;
  image: { url: string };
  color: string;
  text: [PrismicText];
}

@Component({
  selector: 'app-missions-page',
  templateUrl: './missions-page.component.html',
  styleUrls: ['./missions-page.component.scss']
})
export class MissionsPageComponent extends PageComponent<Content> implements OnInit {
  
  public columns : number;

  private _gridByBreakpoint = new Map<ScreenSize, number>([
    [ScreenSize.XL, 3],
    [ScreenSize.L, 3],
    [ScreenSize.M, 2],
    [ScreenSize.S, 2],
    [ScreenSize.XS, 1],
  ]);
  
  constructor(public screenService: ScreenService, public dialog: MatDialog, contentService: ContentService) {
    super(contentService, "missions");
  }
  
  ngOnInit() {
    this.screenService.getScreen().subscribe(screen => {
      this.columns = this._gridByBreakpoint.get(screen);      
    });
  }
  
  openMission(mission: any): void {
    this.dialog.open(MissionComponent, {
      width: "512px",
      data: { mission },
      maxHeight: '80vh',
    });
  }

  ngOnDestroy() {
    super.destroy();
  }
}