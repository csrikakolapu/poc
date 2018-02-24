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
    @Input() filePrefixSuffix : fileNamingConvention;
    @Input() keyName : string;

    constructor(private FetchFileService: FetchFileService){}

    ngOnInit() {
        this.chart = {
            view1: 'pieChart',
            view2: 'donutchart'
        };
        this.chartData = {};

        this.FetchFileService.getFileData(this.filePrefixSuffix.filePrefix + this.filePrefixSuffix.chartOneSuffix).subscribe(response => {
            this.chartData.chart1 = response.fileContentMappedData;
            this.selectedSection = response.fileContentMappedData[0][this.keyName];
            this.selectedSectionName.emit(this.selectedSection);

            var fileKey = this.filePrefixSuffix.filePrefix + '_' + this.selectedSection + this.filePrefixSuffix.chartOneSuffix;
            this.FetchFileService.getFileData(fileKey).subscribe(response => {
                this.chartData.chart2 = response.fileContentMappedData;
            });
        });
    }

    pieClicked(sectionName:string){
        this.selectedSection = sectionName;
        this.selectedSectionName.emit(this.selectedSection);
        var fileKey = this.filePrefixSuffix.filePrefix + '_' +this.selectedSection + this.filePrefixSuffix.chartOneSuffix;
        this.FetchFileService.getFileData(fileKey).subscribe(response => {
            this.chartData.chart2 = response.fileContentMappedData;
        });
    }
}