import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from '../dto/menuitem';


@Component({
    selector:"ua-navtabs",
    templateUrl:'./ua.analysis.navtabs.component.html'
   
})

export class UAAnalysisNavTabsComponent{
    constructor(private router:Router, private activatedRoute: ActivatedRoute){       
    }

   
    
    navItems:MenuItem [] = [
        {
            description:'System Overview',
            linkCode:'/dashboard',
            iconName:'dashboard'
        },
        {
            description:'Inventory',
            linkCode:'/inventory',
            iconName:'university'
        },
        {
            description:'Impact Ananlysis',
            linkCode:'/impact',
            iconName:'bar-chart'
        },
        {
            description:'S/4Hana',
            linkCode:'/sFour',
            iconName:'mixcloud'
        },
        {
            description:'Business Process',
            linkCode:'/bpview',
            iconName:'tasks'
            
        }
    ];
}