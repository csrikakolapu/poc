import { Component } from '@angular/core';

@Component({
    selector:"ua-chart-table",
    templateUrl:'./ua.charttable.component.html' 
})

export class UAChartTableComponent{
    constructor(){   
            
    }
    const tableData : any[] = [
        {"OBJTYPE":"FM","key":"Function Module","value":"72"},
        {"OBJTYPE":"DDIC","key":"Data Dictionary","value":"1244"},
        {"OBJTYPE":"ENH","key":"Enhancements","value":"63"},
        {"OBJTYPE":"FRM","key":"Forms","value":"33"},
        {"OBJTYPE":"PROG","key":"Programs","value":"1746"},
        {"OBJTYPE":"QUER","key":"Queries","value":"20"},
        {"OBJTYPE":"OTH","key":"Others","value":"1736"},
        {"OBJTYPE":"BDC","key":"BDC Objects","value":"42"}
    ];
}