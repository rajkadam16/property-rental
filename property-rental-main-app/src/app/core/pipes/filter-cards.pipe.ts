import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCards',
})
export class FilterCardsPipe implements PipeTransform {
  transform(items: any[], searchText: string, field: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it[field].toLowerCase().includes(searchText);
    });
  }
}
