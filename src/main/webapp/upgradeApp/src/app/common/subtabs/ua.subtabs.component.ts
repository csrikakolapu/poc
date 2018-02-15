import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SubTabItem } from '../dto/subtabitem';


@Component({
    selector:"ua-subtabs",
    templateUrl:'./ua.subtabs.component.html'
   
})

export class UASubTabsComponent{
    constructor(){       
    }

   
    
    subTabItems:SubTabItem [] = [
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