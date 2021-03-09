import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(value: string, method: string): any {
    if (value.length > 0) {
      if (method === 'withoutSpaces') {
        return value.replace(' ', '').length;
      } else if (method === 'numberOfWords') {
        return value.trim().split(' ').length;
      } /*else if (method === 'frequency') {
        const frequency:TextFrequency[] = [];
        for (let i = 0; i < value.length; i++) {
          const character = value.charAt(i);
          frequency.push(new TextFrequency(value.charAt(i), 1));
          if(frequency.find(letter => letter.letter === value.charAt(i))){

          }
          // const character = value.charAt(i);
          // if (frequency[character]) {
          //   frequency[character]++;
          // } else {
          //   frequency[character] = 1;
          // }
        }
        console.log(frequency.find(index => index.letter === 'x'));
        return frequency;
      }*/
    }
    return 0;
  }

}
