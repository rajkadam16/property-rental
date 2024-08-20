import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCards',
})
export class FilterCardsPipe implements PipeTransform {

  transform(apartments: any[], searchText: string): any[] {
    if (!apartments || !searchText) {
      return apartments;
    }

    searchText = searchText.toLowerCase();

    return apartments.filter(apartment => {
      return apartment.title.heading.toLowerCase().includes(searchText) ||
             apartment.title.address.toLowerCase().includes(searchText) ||
             apartment.details.price.toLowerCase().includes(searchText) ||
             apartment.details.size.toLowerCase().includes(searchText) ||
             apartment.details.area.toLowerCase().includes(searchText) ||
             apartment.details.amenities.toLowerCase().includes(searchText);
    });
  }
}
