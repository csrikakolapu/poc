import { Component } from "@angular/core";
import { SubTabItem } from '../dto/subtabitem';


@Component({
    selector:"ua-sfourhana",
    templateUrl:"./ua.sfourhana.component.html"
})

export class UASFourHanaComponent{
    
      subTabItems:SubTabItem [] = [
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