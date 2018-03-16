import { Component,Input,EventEmitter, Output,OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SubTabItem } from '../dto/subtabitem';


@Component({
    selector:"ua-subtabs",
    templateUrl:'./ua.subtabs.component.html'
   
})

export class UASubTabsComponent implements OnInit{
    @Input() subTabItems : SubTabItem[];
    @Output() selectedTab = new EventEmitter<any>();
    tabName: string;

    ngOnInit() {
    	this.tabName = this.subTabItems[0].key;
        this.selectedTab.emit(this.subTabItems[0]);
    }

    tabSelect(tabKey){
    	this.tabName = tabKey.key;
    	this.selectedTab.emit(tabKey);
    }
}