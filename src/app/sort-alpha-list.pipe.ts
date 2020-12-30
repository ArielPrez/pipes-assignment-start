import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabList'
})
export class SortAlphabListPipe implements PipeTransform {

  transform(value: [], serverName: string): any {
    if ( !value ) {
      return value;
    } else {
      // Short version:
      // return value.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1) ;

      return value.sort(( a: any, b: any ) => {
        if ( a.name < b.name ) {
          return -1;
        }
        if ( a.name > b.name ) {
          return 1;
        }
        return 0;
      });
    }
  }

}
