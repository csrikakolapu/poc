import { Component,OnInit } from "@angular/core";
import { SubTabItem } from '../dto/subtabitem';

@Component({
    selector:"ua-impact",
    templateUrl:"./ua.impact.component.html"
})

export class UAImpactComponent implements OnInit {

    subTabItems:SubTabItem [];
    selectedTab:string;

    ngOnInit() {
        this.subTabItems = [
            {  
                key:"defects",
                value:"Incompatibilities",
                required:true
            },
            {  
                key:"performance_nh",
                value:"Performance Non-Hana",
                required:true
            },
            {  
                key:"performance_h",
                value:"Performance Hana",
                required:true
            },
            {  
                key:"usage",
                value:"Usage",
                required:false
            }
        ];
    }

    tabChange(tabKey:string){
        this.selectedTab = tabKey;
        console.log(this.selectedTab);
    }
    
}