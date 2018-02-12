import { Component,OnInit } from "@angular/core";


@Component({
    selector:"ua-inventory",
    templateUrl:"./ua.inventory.component.html"
})

export class UAInventoryComponent implements OnInit {
    chart;
    ngOnInit() {
    	this.chart = {
    		view1: 'pieChart'
    	}
    }
}