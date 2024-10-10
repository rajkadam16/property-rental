import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropDown'
})
export class DropDownPipe implements PipeTransform {

  transform(subNav:any[],dropDown:any): unknown {
    if (!subNav || !dropDown ) {
      return subNav;
    }
    return subNav.filter(subNav => {
      return subNav.price.toLowerCase().includes(dropDown) 
    });
    
  }



}
