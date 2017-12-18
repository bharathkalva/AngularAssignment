import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstCapital'})
export class firstCapital implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "";
     newStr += value.charAt(0);
    newStr = ""+ newStr.toUpperCase();
      for (var i = 1; i <= value.length - 1; i++) {
       newStr += value.charAt(i);
    }
    return newStr;
  }
}