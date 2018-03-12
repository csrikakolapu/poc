import { Component,Input,EventEmitter, Output,OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SubTabItem } from '../dto/subtabitem';


@Component({
    selector:"ua-subtabs",
    templateUrl:'./ua.subtabs.component.html'
   
})

export class UASubTabsComponent implements OnInit{
    @Input() subTabItems : SubTabItem[];
    @Output() selectedTab = new EventEmitter<string>();
    tabName: string;

    ngOnInit() {
    	this.tabName = this.subTabItems[0].key;
    }

    tabSelect(tabKey:string){
    	this.tabName = tabKey;
    	this.selectedTab.emit(tabKey);
    }
}