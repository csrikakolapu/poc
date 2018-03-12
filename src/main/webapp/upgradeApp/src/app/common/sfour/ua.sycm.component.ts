import { Component,OnInit } from "@angular/core";
import { fileNamingConvention } from '../dto/fileNamingConvention'


@Component({
    selector:"ua-sycm",
    templateUrl:"./ua.sycm.component.html"
})

export class UASycmComponent implements OnInit {
    filePrefixSuffix : fileNamingConvention;
    keyName: string;
    tileFileName : string ;
    tableFileName:string ;
    showTable:boolean;
    isInteractive:boolean;
    view1:string;
    view2:string;
    chartToggle:boolean;
    dataByTypeList: string[];

    ngOnInit() {
        this.filePrefixSuffix = new fileNamingConvention("SYCM", "_SUMMARY", "_SUMMARY", "_DATA");
        this.keyName = "OBJTYPE";
        this.tileFileName = 'SYCM_COUNT_SUMMARY';
        this.showTable =  false;
        this.isInteractive =true;
        this.view1 ='pieChart';
        this.view2 ='donutchart';
        this.chartToggle = true;
        this.dataByTypeList = ['COMPLEXITY', 'CATEGORY'];
    }

    fetchTable(selectedSectionName:string){
        console.log('table for-'+selectedSectionName);
        this.tableFileName = this.filePrefixSuffix.filePrefix + '_' + selectedSectionName + this.filePrefixSuffix.tableSuffix;
    }
}