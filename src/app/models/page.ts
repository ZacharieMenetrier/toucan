import { ContentService } from 'src/app/services/content.service';
import { PrismicResult } from 'src/app/models/prismic-result';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class PageComponent<T> implements OnDestroy {

  public content: PrismicResult<T>;
  private _subscription: Subscription;

  constructor(private _contentService: ContentService, private _type: string) {
    this._subscription = this._contentService.getContent<T>(this._type).subscribe(content => {      
      this.content = content;
    });
  }

  destroy() {
    this._subscription.unsubscribe();
  }

  abstract ngOnDestroy(): void;

}
