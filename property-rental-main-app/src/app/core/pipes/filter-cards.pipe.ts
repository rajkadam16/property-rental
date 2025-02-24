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
      return propertyCard.propertyDetails.name.toLowerCase().includes(searchText) ||
        propertyCard.propertyDetails.address.city.toLowerCase().includes(searchText)

    });
  }

}
