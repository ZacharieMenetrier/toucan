import { Mission } from 'src/app/pages/missions-page/missions-page.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  public mission: Mission;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.mission = data.mission;
  }

  ngOnInit() { }

}
