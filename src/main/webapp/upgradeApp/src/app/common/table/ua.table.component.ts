import { Component, OnInit, Input } from '@angular/core';
import { FetchFileService } from '../../fetch-file.service';



@Component({
    selector:"ua-table",
    templateUrl:'./ua.table.component.html'
})

export class UATableComponent implements OnInit{
    tableData : any[];
    tableHeader : any[];
    tableBody : any[];
    errorString: any;
    ascSort:boolean;
    orderByField:string;
    searchText:string;
    searchCategory:string;

    @Input() fileName: string;

    constructor(private FetchFileService: FetchFileService){}

    ngOnInit() {
        this.tableData = [];
        this.tableBody = [];
        this.getTableData();
        this.ascSort = false;
        this.orderByField = '';
        this.searchText = '';
        this.searchCategory = '';
    }
    getTableData(): void {
        
        this.fileName = this.fileName.trim();
        
        if (!this.fileName) { return; }
        
        this.FetchFileService.getFileData(this.fileName)
         .subscribe(
            tableResponse => {
                this.tableData = tableResponse.fileContentMappedData,
                this.tableHeader = this.tableData[0],
                this.tableData.splice(0,1)
                
            });
      
    }
    sortFunction(item) : void{
        this.orderByField = item.key;
        this.ascSort = !this.ascSort;
    }
   


}