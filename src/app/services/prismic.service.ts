import { PrismicResponse } from '../models/prismic-response';
import { PrismicResult } from '../models/prismic-result';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { mergeMap, tap, takeLast, take, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  // The base URL for prismic service.
  private static URL = "https://toucan.cdn.prismic.io/api/v2";
  // The ref to get for querying version.
  private _ref = new ReplaySubject<string>(1);

  constructor(private _http: HttpClient) {
    this._setRef();
  }

  private async _setRef() {
    const data = await this._http.get<any>(PrismicService.URL).toPromise();    
    this._ref.next(data.refs[0].ref);
    this._ref.complete();
  }

  public query<T>(query: string): Observable<PrismicResult<T>[]> {    
    return this._ref.pipe(
      mergeMap(async ref => {
        const response = await this._http.get<PrismicResponse<T>>(PrismicService.URL + "/documents/search?ref=" + ref + "&q=" + query).toPromise();
        return response.results;
      })
    );
  }
}
