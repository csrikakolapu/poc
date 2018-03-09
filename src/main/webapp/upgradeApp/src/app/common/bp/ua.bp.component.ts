import { Component , OnInit, Input, EventEmitter, Output } from '@angular/core';
import { fileNamingConvention } from '../dto/fileNamingConvention'

@Component({
    selector:"ua-businessprocess",
    templateUrl:"./ua.bp.component.html"
})

export class UABPComponent{
    
    filePrefixSuffix : fileNamingConvention;
    keyName: string;
    bpCount : number ;
    tableFileName:string ;
    showTable:boolean;
    isInteractive:boolean;
    view1 : string;
    view2 : string;
    
    ngOnInit() {
      	this.filePrefixSuffix = new fileNamingConvention("BP_", "COUNT_BY_OBJECT", "CONFLICT_COMPLEXITY", "data");
	    this.keyName = '';
	    this.tableFileName =  this.filePrefixSuffix.filePrefix+this.filePrefixSuffix.tableSuffix;
	    this.showTable = false;
	    this.isInteractive = false;
        this.view1 = 'pieChart';
        this.view2 = 'barChart';
    }
    updateBpCount(totalCount:number){
    	console.log(totalCount);
    	this.bpCount = totalCount;
    }
    
}