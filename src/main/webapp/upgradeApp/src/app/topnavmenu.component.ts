import { Component } from '@angular/core';
import { MenuItem } from './menuitem';


@Component({
    selector:"topnavmenu",
    templateUrl:"./partials/navPanel.html"
})



export class TopNavMenuComponent{
    navItems:MenuItem [] = [
        {
            description:'System Overview',
            linkCode:'/home',
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