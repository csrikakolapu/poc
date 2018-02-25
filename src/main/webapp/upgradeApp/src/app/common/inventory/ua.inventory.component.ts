import { Component,OnInit } from "@angular/core";
import { fileNamingConvention } from '../dto/fileNamingConvention'


@Component({
    selector:"ua-inventory",
    templateUrl:"./ua.inventory.component.html"
})

export class UAInventoryComponent implements OnInit {
    filePrefixSuffix : fileNamingConvention;
    keyName: string;
    tileFileName : string ;
    tableFileName:string ;
    showTable:boolean;

    ngOnInit() {
    	this.filePrefixSuffix = new fileNamingConvention("INV_ECC", "_SUMMARY", "_SUMMARY", "");
    	this.keyName = "OBJTYPE";
        this.tileFileName = 'INV_ECC_COUNT';
        this.tableFileName = 'INV_ECC_';
        this.showTable =  false;
    }

    fetchTable(selectedSectionName:string){
    	console.log('table for-'+selectedSectionName);
        this.tableFileName = this.tableFileName+selectedSectionName;
    }
}