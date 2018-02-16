import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
declare let d3: any;

@Component({
    selector: 'ua-d3-pie-chart',
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

export class UAD3PieChartComponent implements OnInit {
    options;

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
    }

    @Input() data : any[];
}