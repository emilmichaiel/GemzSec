import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hash'
})
export class HashPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value.length > 0) {
      let fn = Function('return ' + args[0].toLowerCase() + '(\'' + value + '\');');
      if (args[1] !== undefined) {
        fn = Function('return ' + args[0].toLowerCase() + '(\'' + value + '\', \'' + (+args[1]) + '\');');
      }
      return fn();
    }
  }

}
