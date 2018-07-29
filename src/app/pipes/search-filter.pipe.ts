import { Pipe, PipeTransform } from '@angular/core';
import { IGnome } from '../models/http-response.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(input: IGnome[], searchText: string, filterBy: string): IGnome[] {
    const value = searchText.toLowerCase();

    if (!searchText) {
      return input;
    }

    if (filterBy === 'name') {
      return input.filter((gnome: IGnome) => gnome[filterBy].toLowerCase().includes(value));
    }

    return input.filter((gnome: IGnome) => {
      return gnome[filterBy].find((item: string) => item.toLowerCase().includes(value));
    });
  }
}
