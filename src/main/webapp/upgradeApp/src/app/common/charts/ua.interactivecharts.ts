import { Component, OnInit, Input } from '@angular/core';
import { FetchFileService } from '../../fetch-file.service';
import { fileNamingConvention } from '../dto/fileNamingConvention'


@Component({
    selector:"ua-interactive-chart",
    templateUrl:'./ua.interactivecharts.html'
})

export class UAInteractiveChartComponent implements OnInit{
    chart;
    chartData;
    @Input() filePrefixSuffix : fileNamingConvention;

    constructor(private FetchFileService: FetchFileService){}

    ngOnInit() {
        this.chart = {
            view1: 'pieChart',
            view2: 'donutchart'
        };
        this.chartData = {
            chart1 : [
                {"OBJTYPE":"FM","key":"Function Module","value":"72"},
                {"OBJTYPE":"DDIC","key":"Data Dictionary","value":"1244"},
                {"OBJTYPE":"ENH","key":"Enhancements","value":"63"},
                {"OBJTYPE":"FRM","key":"Forms","value":"33"},
                {"OBJTYPE":"PROG","key":"Programs","value":"1746"},
                {"OBJTYPE":"QUER","key":"Queries","value":"20"},
                {"OBJTYPE":"OTH","key":"Others","value":"1736"},
                {"OBJTYPE":"BDC","key":"BDC Objects","value":"42"}
            ],

            chart2: [
                {"key":"Data Element","value":"719"},
                {"key":"Domain","value":"127"},
                {"key":"Lock Object","value":"2"},
                {"key":"Search Help","value":"15"},
                {"key":"Structure","value":"148"},
                {"key":"Table","value":"188"},
                {"key":"Table Type","value":"27"},
                {"key":"View","value":"18"}
            ]
        };

    }

    pieClicked(selectedKey:string){
        console.log('selected-'+selectedKey); 
    }
}