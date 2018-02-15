import { Component } from '@angular/core';

@Component({
    selector:"ua-table",
    templateUrl:'./ua.table.component.html'
})

export class UATableComponent{
    constructor(){   
        const tableData : any[] = [
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
}