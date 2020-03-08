import { Pipe, PipeTransform } from '@angular/core';
import { Festival } from '../models/festival';
import { PrismicResult } from '../models/prismic-result';

@Pipe({
  name: 'searchFestival'
})
export class SearchFestivalPipe implements PipeTransform {

  isStringContained(strA: string, strB: string): boolean {
    for (const c of strB) {
      const index = strA.indexOf(c);
      if (index == -1) {
        return false;
      }
      strA = strA.slice(index + 1);
    }
    return true;
  }

  transform(festivals: PrismicResult<Festival>[], search: string): PrismicResult<Festival>[] {
    if (!festivals) return null;
    if (search == "") return festivals;
    search = search.toLowerCase();
    search = search.replace(/ /g, '');
    return festivals.filter(festival => {
      if (!festival.data.name) return false;
      const slicedStrings = [
        festival.data.name.toLowerCase(),
        festival.data.place.toLowerCase(),
        festival.data.city.toLowerCase(),
      ];
      return slicedStrings.reduce((acc, cur) => this.isStringContained(cur, search) || acc, false);
    });
  }

}
