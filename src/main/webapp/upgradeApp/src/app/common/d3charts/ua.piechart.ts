import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
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
    bulgedArc;
    regularArc;
    @Input() data : any[];
    @Input() keyName : string;
    @Output() selectedSectionName = new EventEmitter<string>();

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
                growOnHover: false,
                callback: this.callBackFunction.bind(this)

            }
        }
        this.bulgedArc = d3.svg.arc().outerRadius(105);
        this.regularArc = d3.svg.arc().outerRadius(100);
    }

    callBackFunction(chart) : void{
        var prevArc = null;
        var _this = this;
        
        chart.pie.dispatch.on('elementClick', function(e){
            _this.selectedSectionName.emit(e.data[_this.keyName]);
            if(prevArc){
                d3.select(prevArc).classed('clicked', false);
                d3.select(prevArc).select("path").transition().duration(70).attr('d', _this.regularArc);
            }
            d3.select(e.element).classed('clicked', true);
            d3.select(e.element).select("path").transition().duration(70).attr('d', _this.bulgedArc);     
            prevArc = e.element;                   
        });
    }
   
}