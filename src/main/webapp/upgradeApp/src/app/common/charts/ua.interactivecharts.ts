import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FetchFileService } from '../../fetch-file.service';
import { fileNamingConvention } from '../dto/fileNamingConvention'


@Component({
    selector:"ua-interactive-chart",
    templateUrl:'./ua.interactivecharts.html'
})

export class UAInteractiveChartComponent implements OnInit{
    chart;
    chartData;
    selectedSection: string;
    @Output() selectedSectionName = new EventEmitter<string>();
    @Output() totalCount =  new EventEmitter<number>();
    @Input() filePrefixSuffix : fileNamingConvention;
    @Input() keyName : string;
    @Input() isInteractive : boolean;
    @Input() view1 : string;
    @Input() view2 : string;
    
    constructor(private FetchFileService: FetchFileService){}

    ngOnInit() {
        this.chart = {
            view1: this.view1,
            view2: this.view2,
            showAs : 'chart'
        };
        this.chartData = {};

        this.FetchFileService.getFileData(this.filePrefixSuffix.filePrefix + this.filePrefixSuffix.chartOneSuffix).subscribe(response => {
            this.chartData.chart1 = response.fileContentMappedData;
            this.selectedSection = response.fileContentMappedData[0][this.keyName];
            this.selectedSectionName.emit(this.selectedSection);

            
            if(this.chart.view2 == 'barChart'){
                this.updateChartData('COMPLEXITY');
            }
            if(this.isInteractive){

                var fileKey = this.filePrefixSuffix.filePrefix + '_' + this.selectedSection + this.filePrefixSuffix.chartOneSuffix;
                this.FetchFileService.getFileData(fileKey).subscribe(response => {
                    this.chartData.chart2 = response.fileContentMappedData;
                });
            }else{
                var fileKey = this.filePrefixSuffix.filePrefix + this.filePrefixSuffix.chartOneSuffix+ '_'+this.filePrefixSuffix.chartTwoSuffix;
                this.FetchFileService.getFileData(fileKey).subscribe(response => {
                    this.chartData.chart2 = response.fileContentMappedData;
                });
            }


        });

    }

    pieTotal(count:number){
        this.totalCount.emit(count);
    }
    pieClicked(sectionName:string){
        this.selectedSection = sectionName;
        this.selectedSectionName.emit(this.selectedSection);
        var fileKey = this.filePrefixSuffix.filePrefix + '_' +this.selectedSection + this.filePrefixSuffix.chartOneSuffix;
        this.FetchFileService.getFileData(fileKey).subscribe(response => {
            this.chartData.chart2 = response.fileContentMappedData;
        });
    }
    updateChartData(type:string){
        this.chart.showAs = type;
        let typeData;
        if(type == 'COMPLEXITY'){
           typeData = [  {  
                    "key": "NOIMPACT", 
                    "keyDescription":"No Impact",
                    "color": "#d62728",  
                    "values": []  
                },  
                {   "key": "CONFLICT", 
                    "keyDescription":"Conflict with Work around",
                    "color": "#1f77b4",  
                    "values": []  
                }  ]


           }else{ 
           typeData = [
                {
                       "key": "HIGH",  
                       "keyDescription":"High",
                        "color": "#a22739",  
                        "values": []
                    },  
                    {  
                        "key": "LOW",
                        "keyDescription":"Low",
                        "color": "#c85430",  
                        "values": []  
                    },
                      {  
                        "key": "MEDIUM",
                        "keyDescription":"Medium",  
                        "color": "#c69d05",  
                        "values": []  
                    },
                      {  
                        "key": "NA",  
                        "keyDescription":"Not Applicable",
                        "color": "#0b2c5e",  
                        "values": []  
                    }

                    ]
                }

        /*Populate the data for bar chart per type*/
        for (let i = 0; i < typeData.length; i++) {
            var fileName = this.filePrefixSuffix.filePrefix + this.filePrefixSuffix.chartOneSuffix +'_'+typeData[i].key+'_'+type;
            this.FetchFileService.getFileData(fileName).subscribe(response => { 
                typeData[i].values =  response.fileContentMappedData;
            });
        }
        setTimeout(() => {
            this.chartData.chart2 = typeData;
        },500);
    }

}