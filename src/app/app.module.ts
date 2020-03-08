import 'hammerjs';
import { FestivalCardComponent } from './components/festival-card/festival-card.component';
import { FestivalsPageComponent } from './pages/festivals-page/festivals-page.component';
import { FestivalPageComponent } from './pages/festival-page/festival-page.component';
import { SearchFestivalPipe } from './pipes/search-festival.pipe';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import {MatSnackBarModule, MatDividerModule, MatTooltipModule} from "@angular/material";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import { SortFestivalPipe } from './pipes/sort-festival.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MissionsPageComponent } from './pages/missions-page/missions-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MissionComponent } from './components/mission/mission.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TextDirective } from './directives/text.directive';
import { PageComponent } from './components/page/page.component';
import { HighlightDirective } from './directives/highlight.directive';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    FestivalsPageComponent,
    FestivalCardComponent,
    FestivalPageComponent,
    SearchFestivalPipe,
    SortFestivalPipe,
    HomePageComponent,
    SearchBarComponent,
    PostCardComponent,
    MissionsPageComponent,
    MissionComponent,
    FooterComponent,
    AboutPageComponent,
    ContactPageComponent,
    TextDirective,
    PageComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatRippleModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatDialogModule,    
  ],
  exports: [
    SearchFestivalPipe,
  ],
  entryComponents: [
    MissionComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
