import { Component,OnInit } from "@angular/core";
import { SubTabItem } from '../dto/subtabitem';


@Component({
    selector:"ua-sfourhana",
    templateUrl:"./ua.sfourhana.component.html"
})

export class UASFourHanaComponent implements OnInit {
    
    subTabItems:SubTabItem [];

    ngOnInit() {
        this.subTabItems = [
            {  
                key:"busFunctions",
                value:"Business Functions",
                required:true
            },
            {  
                key:"readycheck",
                value:"Readiness Check",
                required:true
            },
            {  
                key:"SYCM",
                value:"Code Incompatibilities ",
                required:true
            }
        ];
    }
}