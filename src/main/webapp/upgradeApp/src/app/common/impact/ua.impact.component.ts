import { Component,OnInit } from "@angular/core";
import { SubTabItem } from '../dto/subtabitem';
import { fileNamingConvention } from '../dto/fileNamingConvention';

@Component({
    selector:"ua-impact",
    templateUrl:"./ua.impact.component.html"
})

export class UAImpactComponent implements OnInit {

    subTabItems:SubTabItem [];
    selectedTab:string;
    filePrefix:string;

    ngOnInit() {
        this.subTabItems = [
            {  
                key:"defects",
                value:"Incompatibilities",
                filePrefix:'DEF',
                required:true
            },
            {  
                key:"performance_nh",
                value:"Performance Non-Hana",
                filePrefix:'PER_NON_HANA',
                required:true
            },
            {  
                key:"performance_h",
                value:"Performance Hana",
                filePrefix:'PER_HANA',
                required:true
            },
            {  
                key:"usage",
                filePrefix:'USG',
                value:"Usage",
                required:false
            }
        ];
        
    }

 
    tabChange(tab){
        this.selectedTab = tab.key;
        this.filePrefix = tab.filePrefix;
        console.log(this.selectedTab);
    }
    
}