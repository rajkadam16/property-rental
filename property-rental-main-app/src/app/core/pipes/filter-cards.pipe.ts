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
      return propertyCard.name.toLowerCase().includes(searchText) ||
      propertyCard.location.toLowerCase().includes(searchText) ||
      propertyCard.price.toLowerCase().includes(searchText) ||
      propertyCard.area.toLowerCase().includes(searchText) ||
      propertyCard.amenities.toLowerCase().includes(searchText);
    });
  }


  // transform(propertyCard: any[], searchText: string,subNav:any[],dropDown:any): any[] {
  //   if (!propertyCard || !searchText ) {
  //     return propertyCard;
  //   }
  //   if (!subNav || !dropDown ) {
  //     return subNav;
  //   }
  //   searchText = searchText.toLowerCase();


  //   return propertyCard.filter(propertyCard => {
  //     return propertyCard.name.toLowerCase().includes(searchText) ||
  //     propertyCard.location.toLowerCase().includes(searchText) ||
  //     propertyCard.price.toLowerCase().includes(searchText) ||
  //     propertyCard.area.toLowerCase().includes(searchText) ||
  //     propertyCard.amenities.toLowerCase().includes(searchText);
  //   }) &&  subNav.filter(subNav => {
  //     return subNav.price.toLowerCase().includes(dropDown) 
  //   });
  // }
}
