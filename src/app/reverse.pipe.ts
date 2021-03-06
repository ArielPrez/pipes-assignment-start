import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    // My solution:
    // if (value) {
    //   const charArray = [];
    //   for (const i of value) {
    //     charArray.push(i);
    //   }
    //   return charArray.reverse().join('');
    // } else {
    //   return value;
    // }
    return value.split('').reverse().join('');
  }

}
