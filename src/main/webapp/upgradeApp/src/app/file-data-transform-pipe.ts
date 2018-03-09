import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Jsonkeys'})
export class KeysPipe implements PipeTransform {
  transform(arrayList, args:string[]) : any {
    let keys = [];
    for(let key in arrayList){
   			keys.push({key: key, value: arrayList[key]});
	    }
  
    return keys;
  }
}