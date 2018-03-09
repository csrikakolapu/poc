import { Component, OnInit, ViewEncapsulation , Input , Output } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'ua-discrete-bar',
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

export class UADiscreteBarComponent implements OnInit {
  options;
  @Input() data : any[];

    
  ngOnInit() {
    this.options = {
      chart: {
        type: 'multiBarChart',
        height: 300,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        showControls: false,
        stacked: false,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis',
            staggerLabels:false,
        axisLabelDistance: 5
        },
        yAxis: {
          axisLabel: 'Y Axis',
            staggerLabels:false,
        axisLabelDistance: 5
        },
        legendPosition: "right",
      groupSpacing:"0.5",
      reduceXTicks:false
      }
    }
  }

}
