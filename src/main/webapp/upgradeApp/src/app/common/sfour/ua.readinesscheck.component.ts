import { Component,OnInit } from "@angular/core";
import { fileNamingConvention } from '../dto/fileNamingConvention'


@Component({
    selector:"ua-readiness-check",
    templateUrl:"./ua.readinesscheck.component.html"
})

export class UAReadinessCheckComponent implements OnInit {
    filePrefixSuffix : fileNamingConvention;
    keyName: string;
    tileFileName : string ;
    tableFileName:string ;
    showTable:boolean;
    isInteractive:boolean;
    view1:string;
    view2:string;

    ngOnInit() {
        this.filePrefixSuffix = new fileNamingConvention("READINESS", "_SUMMARY", "_IMPACT", "_DATA");
        this.keyName = "AREANAME";
        this.tileFileName = 'READINESS_COUNT_SUMMARY';
        this.showTable =  false;
        this.isInteractive =true;
        this.view1 ='pieChart';
        this.view2 ='donutchart';
    }

    fetchTable(selectedSectionName:string){
        console.log('table for-'+selectedSectionName);
        this.tableFileName = this.filePrefixSuffix.filePrefix + '_' + selectedSectionName + this.filePrefixSuffix.tableSuffix;
    }
}