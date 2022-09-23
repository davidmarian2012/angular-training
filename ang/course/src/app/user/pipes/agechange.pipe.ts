import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agechange'
})
export class AgechangePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value + 10;
  }

}
