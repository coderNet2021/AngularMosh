import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value)
      return null;

    let prepositions =['of','the','in',]
    let words = value.split(' ');
    console.log(words);
    for(var index=0;index<words.length;index++)
    {
      if(index>0 && prepositions.includes(words[index].toLocaleLowerCase()))
      {
        words[index]= words[index].toLowerCase();
      }
      else {
        words[index]=words[index].slice(0,1).toUpperCase() +words[index].slice(1).toLowerCase();
      }

    }
    console.log(words);
    return words.join(' ');
  }

}
