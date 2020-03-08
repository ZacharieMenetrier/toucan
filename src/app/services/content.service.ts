import { PrismicResult } from '../models/prismic-result';
import { PrismicService } from './prismic.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private _prismicService: PrismicService) { }

  getContent<T>(type: string): Observable<PrismicResult<T>> {    
    return this._prismicService.query<T>('[[at(document.type, "' + type + '")]]').pipe(
      map(result => result[0])
    );
  }
}
