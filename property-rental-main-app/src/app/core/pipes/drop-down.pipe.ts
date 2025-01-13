import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropDown'
})
export class DropDownPipe implements PipeTransform {

  transform(value: any[], args: any[]): any {
    if (!value) {
      return value;
    }
    return value.filter((val) => {
      return val[args[0]].toLowerCase().includes(args[1].toLowerCase());
    });
  }



}
