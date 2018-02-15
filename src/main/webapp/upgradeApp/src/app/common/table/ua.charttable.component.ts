import { Component, Input} from '@angular/core';

@Component({
    selector:"ua-chart-table",
    templateUrl:'./ua.charttable.component.html' 
})

export class UAChartTableComponent{
    constructor(){   
            
    }
    @Input() tableData : any[];
    
}