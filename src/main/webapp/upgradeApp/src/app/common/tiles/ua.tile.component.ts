import { Component, OnInit, Input } from '@angular/core';
import { FetchFileService } from '../../fetch-file.service';

import { Router, ActivatedRoute } from '@angular/router';
import { TileItem } from '../dto/tileitem';


@Component({
    selector:"ua-tiles",
    templateUrl:'./ua.tile.component.html'
   
})

export class UATilesComponent{
    tileItems : TileItem[];

    @Input() tileFileName: string;
    
    constructor(private FetchFileService: FetchFileService){}

    ngOnInit() {
        this.tileItems = [];
        this.getTilesData();
    }
    getTilesData(): void {
        
        this.tileFileName = this.tileFileName.trim();
        
        if (!this.tileFileName) { return; }
        
        this.FetchFileService.getFileData(this.tileFileName)
         .subscribe(
            tableResponse => this.tileItems = tableResponse.fileContentMappedData
        );

      
    }
  
}