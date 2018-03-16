import { Component,OnInit,Input } from "@angular/core";
import { SubTabItem } from '../dto/subtabitem';
import { fileNamingConvention } from '../dto/fileNamingConvention';

@Component({
    selector:"ua-impact-type",
    templateUrl:"./ua.impact.type.component.html"
})

export class UAImpactTypeComponent implements OnInit {

  @Input() filePrefix:string;
  @Input() selectedTab:string;
    
    filePrefixSuffix : fileNamingConvention;
    keyName: string;
    tileFileName : string ;
    tableFileName:string ;
    showTable:boolean;
    isInteractive:boolean;
    view1:string;
    view2:string;
    selectedType:string;
    dataByTypeList:any;
    chartToggle:boolean;
     

    ngOnInit() {
       
     
        this.filePrefixSuffix = new fileNamingConvention(this.filePrefix+"_ECC", "_SUMMARY", "_SUMMARY", "_SUMMARY");
        this.keyName = "obj";
        this.tileFileName = this.filePrefixSuffix.filePrefix+'_COUNT_SUMMARY';
        this.showTable =  false;
        this.isInteractive =true;
        this.view1 ='pieChart';
        this.view2 ='donutchart';
        this.chartToggle = true;
        this.dataByTypeList = ['COMPLEXITY', 'CATEGORY','ERROR'];
    }
    fetchTable(selectedSectionName:string){
        this.tableFileName = this.filePrefixSuffix.filePrefix+'_'+selectedSectionName;
    }

   
}