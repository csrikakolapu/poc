import { Component,OnInit } from "@angular/core";
import { SubTabItem } from '../dto/subtabitem';


@Component({
    selector:"ua-sfourhana",
    templateUrl:"./ua.sfourhana.component.html"
})

export class UASFourHanaComponent implements OnInit {
    
    subTabItems:SubTabItem [];
    selectedTab:string;

    ngOnInit() {
        this.subTabItems = [
            {  
                key:"busFunctions",
                value:"Business Functions",
                required:true,
                filePrefix:''
            },
            {  
                key:"readycheck",
                value:"Readiness Check",
                required:true,
                filePrefix:''
            },
            {  
                key:"SYCM",
                value:"Code Incompatibilities",
                required:true,
                filePrefix:''
            }
        ];

        this.selectedTab = 'busFunctions';
    }

    tabChange(tabKey){
        this.selectedTab = tabKey.key;
        console.log(this.selectedTab);
    }
}