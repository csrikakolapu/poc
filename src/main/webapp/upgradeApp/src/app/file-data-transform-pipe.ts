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
@Pipe({name: 'orderBy'})
export class OrderBy implements PipeTransform {
  transform(list:any, orderFields: string, orderType:boolean) : any {

	    list.sort(function(a, b) {
	        if (orderType) {
	            if (a[orderFields] < b[orderFields]) return -1;
	            if (a[orderFields] > b[orderFields]) return 1;
	            return 0;
	        } else {
	            if (a[orderFields] < b[orderFields]) return 1;
	            if (a[orderFields] > b[orderFields]) return -1;
	            return 0;
	        }
	    });
		return list;
	}

}

@Pipe({name: 'filterBy'})
export class FilterBy implements PipeTransform {
  transform(list:any[], filterString:string, searchText:string) : any {
  	if(!list) return [];
  	if(!searchText) return list;

  	let filteredItems = [];
   	if(filterString != undefined && searchText != undefined){
        list.forEach(item =>
        {
          
        if(item[filterString].toLowerCase().indexOf(searchText.toLowerCase()) > -1){
          filteredItems.push(item);
        }

        });
    }else{
      filteredItems = list;
    }
    

   	return filteredItems;

  }
}