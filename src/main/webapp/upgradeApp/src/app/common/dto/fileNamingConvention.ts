export class fileNamingConvention {
	filePrefix : string = "";
    chartOneSuffix : string = "";
    chartTwoSuffix : string = "";
    tableSuffix : string = "";

    constructor(filePrefix:string, chartOneSuffix:string, chartTwoSuffix:string, tableSuffix:string){
    	this.filePrefix = filePrefix;
    	this.chartOneSuffix = chartOneSuffix;
    	this.chartTwoSuffix = chartTwoSuffix;
    	this.tableSuffix = tableSuffix;
    }
}