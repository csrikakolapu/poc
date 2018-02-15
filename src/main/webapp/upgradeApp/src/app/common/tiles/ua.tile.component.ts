import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { TileItem } from '../dto/tileitem';


@Component({
    selector:"ua-tiles",
    templateUrl:'./ua.tile.component.html'
   
})

export class UATilesComponent{
    constructor(){       
    }

   
    
    tileItems:TileItem [] = [
       {  
        key:"Total",
        value:"0000004956",
        color:"red"
        },
        {  
        key:"Core Modifications",
        value:"0000000000",
        color:"blue"
        },
        {  
        key:"DDIC",
        value:"0000001244",
        color:"yellow"
        },
        {  
        key:"Non-DDIC",
        value:"0000003712",
        color:"green"
        }
    ];
}