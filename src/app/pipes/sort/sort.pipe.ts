import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: number[], args: string): any {
    if (args === "ascending") {
      return value.sort(this.sortMethod);
    } else if (args === "descending") {
      return value.sort(this.sortMethod).reverse();
    }
  }

  sortMethod = (a: number, b: number): any => {
    return a - b;
  }

}
