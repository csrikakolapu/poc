import { Component } from '@angular/core';
 
@Component({
  selector: 'ua-pie-chart',
  templateUrl: './ua.piechart.html'
})
export class UAPieChartComponent {
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
  public piechartoptions:any = {
    responsive: true
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}