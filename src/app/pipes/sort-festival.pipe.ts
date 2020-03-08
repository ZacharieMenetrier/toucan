import { Pipe, PipeTransform } from '@angular/core';
import { Festival } from '../models/festival';

@Pipe({
  name: 'sortFestival',
  pure: false
})
export class SortFestivalPipe implements PipeTransform {

  transform(festivals: {key: string, value: Festival}[], sort: {field: string, ascend: boolean}): {key: string, value: Festival}[] {
    if (!festivals) return null;
    if (sort.field =="date") {
      festivals.sort((a, b) => {
        const dateA = new Date(a.value.date_start);
        const dateB = new Date(b.value.date_start);
        return sort.ascend ? dateA.valueOf() - dateB.valueOf() : dateB.valueOf() - dateA.valueOf();
      });
    }
    if (sort.field =="name") {
      festivals.sort((a, b) => {
        return sort.ascend ? a.value.name > b.value.name ? 1 : -1 : a.value.name < b.value.name ? 1 : -1;
      });
    }    
    return festivals;
  }

}
