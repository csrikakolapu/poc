import { Component,Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SubTabItem } from '../dto/subtabitem';


@Component({
    selector:"ua-subtabs",
    templateUrl:'./ua.subtabs.component.html'
   
})

export class UASubTabsComponent{
    @Input() subTabItems : SubTabItem[];
}