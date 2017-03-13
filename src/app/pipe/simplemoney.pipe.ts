import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'simpleMoneyPipe'})
export class SimpleMoneyPipe implements PipeTransform {
    transform(value: number, exponent: string): string {
        return value.toFixed(2);
  }
}