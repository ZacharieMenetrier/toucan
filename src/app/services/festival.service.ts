import { PrismicResult } from '../models/prismic-result';
import { PrismicService } from './prismic.service';
import { ReplaySubject, Observable } from 'rxjs';
import { Festival } from '../models/festival';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  private _festivals = new ReplaySubject<PrismicResult<Festival>[]>(1);

  constructor(private _prismicService: PrismicService) {
    this._prismicService.query<Festival>('[[at(document.type, "festival")]]').subscribe(festivals => {
      this._festivals.next(festivals);
    }); 
  }

  public getAllFestivals(): Observable<PrismicResult<Festival>[]> {
    return this._festivals.asObservable();
  }

  public getFestival(uid: string): Observable<PrismicResult<Festival>> {
    return this._festivals.pipe(
      map(festivals => festivals.find(festival => festival.uid == uid))
    );
  }

}
