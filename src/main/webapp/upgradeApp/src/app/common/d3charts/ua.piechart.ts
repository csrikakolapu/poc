import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let d3: any;

@Component({
    selector: 'ua-pie-chart',
    template: `
        <div>
        <nvd3 [options]="options" [data]="data"></nvd3>
        </div>
    `,
    // include original styles
    styleUrls: [
        '../../../../node_modules/nvd3/build/nv.d3.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class UAPieChartComponent implements OnInit {
    options;
    data;
    ngOnInit() {
        this.options = {
            chart: {
                type: 'pieChart',
                height: 300,
                x: function(d){return d.key;},
                y: function(d){return d.value;},
                showLabels: true,
                labelType: "value",
                duration: 500,
                labelThreshold: 0.05,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                },
                legendPosition: "right",
                showTooltipPercent: true,
                growOnHover: false

            }
        }
        this.data = [
            {"OBJTYPE":"FM","key":"Function Module","value":"72"},
            {"OBJTYPE":"DDIC","key":"Data Dictionary","value":"1244"},
            {"OBJTYPE":"ENH","key":"Enhancements","value":"63"},
            {"OBJTYPE":"FRM","key":"Forms","value":"33"},
            {"OBJTYPE":"PROG","key":"Programs","value":"1746"},
            {"OBJTYPE":"QUER","key":"Queries","value":"20"},
            {"OBJTYPE":"OTH","key":"Others","value":"1736"},
            {"OBJTYPE":"BDC","key":"BDC Objects","value":"42"}
        ]
    }
}