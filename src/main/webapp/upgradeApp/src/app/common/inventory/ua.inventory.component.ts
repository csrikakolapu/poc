import { Component,OnInit } from "@angular/core";
import { fileNamingConvention } from '../dto/fileNamingConvention'


@Component({
    selector:"ua-inventory",
    templateUrl:"./ua.inventory.component.html"
})

export class UAInventoryComponent implements OnInit {
    filePrefixSuffix : fileNamingConvention;
    keyName: string;

    ngOnInit() {
    	this.filePrefixSuffix = new fileNamingConvention("INV_ECC", "_SUMMARY", "_SUMMARY", "");
    	this.keyName = "OBJTYPE";
    }

    fetchTable(selectedSectionName:string){
    	console.log('table for-'+selectedSectionName);
    }
}