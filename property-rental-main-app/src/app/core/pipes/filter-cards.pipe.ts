import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCards',
})
export class FilterCardsPipe implements PipeTransform {

  transform(propertyCard: any[], searchText: string): any[] {
    if (!propertyCard || !searchText) {
      return propertyCard;
    }

    searchText = searchText.toLowerCase();

    return propertyCard.filter(propertyCard => {
      return propertyCard.propertyName.toLowerCase().includes(searchText) ||
        propertyCard.propertyLocation.toLowerCase().includes(searchText) ||
        propertyCard.propertyPrice.toLowerCase().includes(searchText) ||
        propertyCard.propertyArea.toLowerCase().includes(searchText)
    });
  }

}
