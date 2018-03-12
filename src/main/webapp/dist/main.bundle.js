webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/common/homepage.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ua_app_routing_module__ = __webpack_require__("../../../../../src/app/ua.app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_header_uaheader_component__ = __webpack_require__("../../../../../src/app/common/header/uaheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_executions_ua_executionroot_component__ = __webpack_require__("../../../../../src/app/common/executions/ua.executionroot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_executions_ua_executions_component__ = __webpack_require__("../../../../../src/app/common/executions/ua.executions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_executions_ua_new_execution_component__ = __webpack_require__("../../../../../src/app/common/executions/ua.new.execution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_navtabs_ua_analysis_root_component__ = __webpack_require__("../../../../../src/app/common/navtabs/ua.analysis.root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_navtabs_ua_analysis_navtabs_component__ = __webpack_require__("../../../../../src/app/common/navtabs/ua.analysis.navtabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_charts_ua_barchart__ = __webpack_require__("../../../../../src/app/common/charts/ua.barchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_inventory_ua_inventory_component__ = __webpack_require__("../../../../../src/app/common/inventory/ua.inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_impact_ua_impact_component__ = __webpack_require__("../../../../../src/app/common/impact/ua.impact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_bp_ua_bp_component__ = __webpack_require__("../../../../../src/app/common/bp/ua.bp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_sfour_ua_sfourhana_component__ = __webpack_require__("../../../../../src/app/common/sfour/ua.sfourhana.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_tiles_ua_tile_component__ = __webpack_require__("../../../../../src/app/common/tiles/ua.tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_subtabs_ua_subtabs_component__ = __webpack_require__("../../../../../src/app/common/subtabs/ua.subtabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_table_ua_table_component__ = __webpack_require__("../../../../../src/app/common/table/ua.table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_d3charts_ua_discretebar__ = __webpack_require__("../../../../../src/app/common/d3charts/ua.discretebar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_d3charts_ua_piechart__ = __webpack_require__("../../../../../src/app/common/d3charts/ua.piechart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_d3charts_ua_donutchart__ = __webpack_require__("../../../../../src/app/common/d3charts/ua.donutchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_table_ua_charttable_component__ = __webpack_require__("../../../../../src/app/common/table/ua.charttable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__common_charts_ua_piechart__ = __webpack_require__("../../../../../src/app/common/charts/ua.piechart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__common_charts_ua_interactivecharts__ = __webpack_require__("../../../../../src/app/common/charts/ua.interactivecharts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__file_data_transform_pipe__ = __webpack_require__("../../../../../src/app/file-data-transform-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__fetch_file_service__ = __webpack_require__("../../../../../src/app/fetch-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__ua_app_routing_module__["a" /* UAAppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_nvd3__["NvD3Module"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_30__fetch_file_service__["a" /* FetchFileService */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__common_header_uaheader_component__["a" /* UAHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__common_executions_ua_executionroot_component__["a" /* UAExecutionRootComponent */],
                __WEBPACK_IMPORTED_MODULE_8__common_executions_ua_executions_component__["a" /* UAExecutionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__common_executions_ua_new_execution_component__["a" /* UANewExecutionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__common_navtabs_ua_analysis_root_component__["a" /* UAAnalysisRootComponent */],
                __WEBPACK_IMPORTED_MODULE_11__common_navtabs_ua_analysis_navtabs_component__["a" /* UAAnalysisNavTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__common_charts_ua_barchart__["a" /* UABarChartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__common_inventory_ua_inventory_component__["a" /* UAInventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_14__common_impact_ua_impact_component__["a" /* UAImpactComponent */],
                __WEBPACK_IMPORTED_MODULE_15__common_bp_ua_bp_component__["a" /* UABPComponent */],
                __WEBPACK_IMPORTED_MODULE_16__common_sfour_ua_sfourhana_component__["a" /* UASFourHanaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__common_tiles_ua_tile_component__["a" /* UATilesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__common_subtabs_ua_subtabs_component__["a" /* UASubTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__common_table_ua_table_component__["a" /* UATableComponent */],
                __WEBPACK_IMPORTED_MODULE_21__common_d3charts_ua_discretebar__["a" /* UADiscreteBarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__common_d3charts_ua_piechart__["a" /* UAD3PieChartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__common_table_ua_charttable_component__["a" /* UAChartTableComponent */],
                __WEBPACK_IMPORTED_MODULE_23__common_d3charts_ua_donutchart__["a" /* UADonutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_25__common_charts_ua_piechart__["a" /* UAPieChartComponent */],
                __WEBPACK_IMPORTED_MODULE_26__common_charts_ua_interactivecharts__["a" /* UAInteractiveChartComponent */],
                __WEBPACK_IMPORTED_MODULE_27__file_data_transform_pipe__["a" /* KeysPipe */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/bp/ua.bp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bp-container view-wrapper col-xs-12\">\r\n\t<div class=\"col-xs-12 no-padding\">\r\n\t\t<div class=\"col-xs-2 bp-column top-column\">\r\n\t\t\t<p>Total count</p>\r\n\t\t\t<div class=\"center-section text-center\">\r\n\t\t\t\t<h1 class=\"count text-center\">{{bpCount}}</h1>\r\n\t\t\t\t<span>BP count</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"inventory-graph-container col-xs-10 no-padding\">\r\n\t\t\t<ua-interactive-chart (totalCount)= \"updateBpCount($event)\"[filePrefixSuffix]=\"filePrefixSuffix\" [keyName]=\"keyName\" [isInteractive]=\"isInteractive\" [view1]=\"view1\" [view2]=\"view2\" ></ua-interactive-chart>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xs-3 pull-right text-right margin-15\">\r\n\t\t<a class=\"btn btn-primary\" (click)=\"showTable = !showTable\">Show/Hide Total Data</a>\r\n\t</div>\r\n\t<div class=\"col-xs-12\" *ngIf=\"showTable\">\r\n\t\t<ua-table  [fileName] = \"tableFileName\"></ua-table>\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/common/bp/ua.bp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UABPComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dto_fileNamingConvention__ = __webpack_require__("../../../../../src/app/common/dto/fileNamingConvention.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UABPComponent = (function () {
    function UABPComponent() {
    }
    UABPComponent.prototype.ngOnInit = function () {
        this.filePrefixSuffix = new __WEBPACK_IMPORTED_MODULE_1__dto_fileNamingConvention__["a" /* fileNamingConvention */]("BP_", "COUNT_BY_OBJECT", "CONFLICT_COMPLEXITY", "data");
        this.keyName = '';
        this.tableFileName = this.filePrefixSuffix.filePrefix + this.filePrefixSuffix.tableSuffix;
        this.showTable = false;
        this.isInteractive = false;
        this.view1 = 'pieChart';
        this.view2 = 'barChart';
    };
    UABPComponent.prototype.updateBpCount = function (totalCount) {
        console.log(totalCount);
        this.bpCount = totalCount;
    };
    UABPComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-businessprocess",
            template: __webpack_require__("../../../../../src/app/common/bp/ua.bp.component.html")
        })
    ], UABPComponent);
    return UABPComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/charts/ua.barchart.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:500px; height:500px\">\r\n    <div style=\"display: block\">\r\n      <canvas baseChart\r\n              [datasets]=\"barChartData\"\r\n              [labels]=\"barChartLabels\"\r\n              [options]=\"barChartOptions\"\r\n              [legend]=\"barChartLegend\"\r\n              [chartType]=\"barChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n    \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/common/charts/ua.barchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UABarChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UABarChartComponent = (function () {
    function UABarChartComponent() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    // events
    UABarChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    UABarChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    UABarChartComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    UABarChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ua-bar-chart',
            template: __webpack_require__("../../../../../src/app/common/charts/ua.barchart.html")
        })
    ], UABarChartComponent);
    return UABarChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/charts/ua.interactivecharts.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-6 graph-box padding-top-10\" *ngIf=\"showPieChart\">\r\n\t<div class=\"pull-left col-xs-9\">&nbsp;</div>\r\n\t<div class=\"pull-right col-xs-3 switch-block-container no-padding\"> \r\n\t\t<a class=\"switch-block col-xs-6 border-right text-center\" href=\"javascript:void(0)\" (click)=\"chart.view1='pieChart'\" ng-class=\"chart.view1=='pieChart'?'active':''\" title=\"Pie\">\r\n\t\t\t<span class=\"fa-lg fa fa-pie-chart fa-lg\"></span>\r\n\t\t</a>\r\n\t\t<a class=\"switch-block col-xs-6 text-center\" ng-class=\"chart.view1=='table'?'active':''\" href=\"javascript:void(0)\" (click)=\"chart.view1='table'\" title=\"Tabular\">\r\n\t\t\t<span class=\"fa fa-table fa-lg\"></span>\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"center-section clear-both\">\r\n\t\t<ua-d3-pie-chart *ngIf=\"chart.view1=='pieChart'\" [data]=\"chartData.chart1\" [keyName]=\"keyName\" (selectedSectionName)=\"pieClicked($event)\" (totalCount)=\"pieTotal($event)\" [isInteractive]=\"isInteractive\"></ua-d3-pie-chart>\r\n\t\t<div class=\"tabular-data\" *ngIf=\"chart.view1=='table'\">\r\n\t\t\t<ua-chart-table [tableData]=\"chartData.chart1\"></ua-chart-table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"col-xs-6 graph-box padding-top-10\" *ngIf=\"showDonutChart\">\r\n\t<div class=\"pull-left col-xs-9\">&nbsp;</div>\r\n\t<div class=\"pull-right col-xs-3 switch-block-container no-padding\"> \r\n\t\t<a class=\"switch-block col-xs-6 border-right text-center\" href=\"javascript:void(0)\" (click)=\"chart.view2='donutchart'\" ng-class=\"chart.view2=='donutchart'?'active':''\" title=\"Pie\">\r\n\t\t\t<span class=\"fa-lg fa fa-pie-chart fa-lg\"></span>\r\n\t\t</a>\r\n\t\t<a class=\"switch-block col-xs-6 text-center\" ng-class=\"chart.view2=='table'?'active':''\" href=\"javascript:void(0)\" (click)=\"chart.view2='table'\" title=\"Tabular\">\r\n\t\t\t<span class=\"fa fa-table fa-lg\"></span>\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"center-section clear-both\">\r\n\t\t<ua-donut-chart *ngIf=\"chart.view2=='donutchart'\" [data]=\"chartData.chart2\"></ua-donut-chart>\r\n\t\t<div class=\"tabular-data\" *ngIf=\"chart.view2=='table'\">\r\n\t\t\t<ua-chart-table [tableData]=\"chartData.chart2\"></ua-chart-table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"col-xs-6 graph-box padding-top-10\" *ngIf=\"showBarChart\">\r\n\t<div class=\"pull-left col-xs-8\">&nbsp;</div>\r\n\t<div class=\"pull-right col-xs-4 switch-block-container no-padding\"> \r\n\t\t<a class=\"switch-block col-xs-4 border-right text-center\" href=\"javascript:void(0)\" (click)=\"updateChartData('COMPLEXITY')\" ng-class=\"chart.view2=='COMPLEXITY'?'active':''\" title=\"Complexity\">\r\n\t\t\t<span class=\"fa-lg fa fa-pie-chart fa-lg\"></span>\r\n\t\t</a>\r\n\t\t<a class=\"switch-block col-xs-4 border-right text-center\" href=\"javascript:void(0)\" (click)=\"updateChartData('MIGRATION')\" ng-class=\"chart.view2=='MIGRATION'?'active':''\" title=\"Migration\">\r\n\t\t\t<span class=\"fa-lg fa fa-pie-chart fa-lg\"></span>\r\n\t\t</a>\r\n\t\t<a class=\"switch-block col-xs-4 text-center\" ng-class=\"chart.view2=='table'?'active':''\" href=\"javascript:void(0)\" (click)=\"chart.view2='table'\" title=\"Tabular\">\r\n\t\t\t<span class=\"fa fa-table fa-lg\"></span>\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"center-section clear-both\">\r\n\t\t<ua-discrete-bar  [data]=\"chartData.chart2\"></ua-discrete-bar>\r\n\t\t<div class=\"legend-overlay\"  *ngIf=\"chart.view2 =='table'\">\r\n\t\t\t<ul>\r\n\t\t\t\t\r\n\t\t\t\t<li *ngFor=\"let legend of chartData.chart2[0].values\">{{legend.label}} - {{legend.description}}</li>\r\n\t\t\t\t\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/common/charts/ua.interactivecharts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAInteractiveChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetch_file_service__ = __webpack_require__("../../../../../src/app/fetch-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dto_fileNamingConvention__ = __webpack_require__("../../../../../src/app/common/dto/fileNamingConvention.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UAInteractiveChartComponent = (function () {
    function UAInteractiveChartComponent(FetchFileService) {
        this.FetchFileService = FetchFileService;
        this.selectedSectionName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.totalCount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UAInteractiveChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chart = {
            view1: this.view1,
            view2: this.view2,
            showAs: 'chart'
        };
        this.chartData = {};
        this.showPieChart = false;
        this.showDonutChart = false;
        this.showBarChart = false;
        this.identifyChartSection();
        this.FetchFileService.getFileData(this.filePrefixSuffix.filePrefix + this.filePrefixSuffix.chartOneSuffix).subscribe(function (response) {
            _this.chartData.chart1 = response.fileContentMappedData;
            _this.selectedSection = response.fileContentMappedData[0][_this.keyName];
            _this.selectedSectionName.emit(_this.selectedSection);
            if (_this.chart.view2 == 'barChart') {
                _this.updateChartData('COMPLEXITY');
            }
            if (_this.isInteractive) {
                var fileKey = _this.filePrefixSuffix.filePrefix + '_' + _this.selectedSection + _this.filePrefixSuffix.chartOneSuffix;
                _this.FetchFileService.getFileData(fileKey).subscribe(function (response) {
                    _this.chartData.chart2 = response.fileContentMappedData;
                });
            }
            else {
                var fileKey = _this.filePrefixSuffix.filePrefix + _this.filePrefixSuffix.chartOneSuffix + '_' + _this.filePrefixSuffix.chartTwoSuffix;
                _this.FetchFileService.getFileData(fileKey).subscribe(function (response) {
                    _this.chartData.chart2 = response.fileContentMappedData;
                });
            }
        });
    };
    UAInteractiveChartComponent.prototype.identifyChartSection = function () {
        if (this.view1 == 'pieChart' || this.view2 == 'pieChart') {
            this.showPieChart = true;
        }
        if (this.view1 == 'donutchart' || this.view2 == 'donutchart') {
            this.showDonutChart = true;
        }
        if (this.view1 == 'barChart' || this.view2 == 'barChart') {
            this.showBarChart = true;
        }
    };
    UAInteractiveChartComponent.prototype.pieTotal = function (count) {
        this.totalCount.emit(count);
    };
    UAInteractiveChartComponent.prototype.pieClicked = function (sectionName) {
        var _this = this;
        this.selectedSection = sectionName;
        this.selectedSectionName.emit(this.selectedSection);
        var fileKey = this.filePrefixSuffix.filePrefix + '_' + this.selectedSection + this.filePrefixSuffix.chartOneSuffix;
        this.FetchFileService.getFileData(fileKey).subscribe(function (response) {
            _this.chartData.chart2 = response.fileContentMappedData;
        });
    };
    UAInteractiveChartComponent.prototype.updateChartData = function (type) {
        var _this = this;
        this.chart.showAs = type;
        var typeData;
        if (type == 'COMPLEXITY') {
            typeData = [{
                    "key": "NOIMPACT",
                    "keyDescription": "No Impact",
                    "color": "#d62728",
                    "values": []
                },
                { "key": "CONFLICT",
                    "keyDescription": "Conflict with Work around",
                    "color": "#1f77b4",
                    "values": []
                }];
        }
        else {
            typeData = [
                {
                    "key": "HIGH",
                    "keyDescription": "High",
                    "color": "#a22739",
                    "values": []
                },
                {
                    "key": "LOW",
                    "keyDescription": "Low",
                    "color": "#c85430",
                    "values": []
                },
                {
                    "key": "MEDIUM",
                    "keyDescription": "Medium",
                    "color": "#c69d05",
                    "values": []
                },
                {
                    "key": "NA",
                    "keyDescription": "Not Applicable",
                    "color": "#0b2c5e",
                    "values": []
                }
            ];
        }
        var _loop_1 = function (i) {
            fileName = this_1.filePrefixSuffix.filePrefix + this_1.filePrefixSuffix.chartOneSuffix + '_' + typeData[i].key + '_' + type;
            this_1.FetchFileService.getFileData(fileName).subscribe(function (response) {
                typeData[i].values = response.fileContentMappedData;
            });
        };
        var this_1 = this, fileName;
        /*Populate the data for bar chart per type*/
        for (var i = 0; i < typeData.length; i++) {
            _loop_1(i);
        }
        setTimeout(function () {
            _this.chartData.chart2 = typeData;
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UAInteractiveChartComponent.prototype, "selectedSectionName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UAInteractiveChartComponent.prototype, "totalCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__dto_fileNamingConvention__["a" /* fileNamingConvention */])
    ], UAInteractiveChartComponent.prototype, "filePrefixSuffix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UAInteractiveChartComponent.prototype, "keyName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], UAInteractiveChartComponent.prototype, "isInteractive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UAInteractiveChartComponent.prototype, "view1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UAInteractiveChartComponent.prototype, "view2", void 0);
    UAInteractiveChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-interactive-chart",
            template: __webpack_require__("../../../../../src/app/common/charts/ua.interactivecharts.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fetch_file_service__["a" /* FetchFileService */]])
    ], UAInteractiveChartComponent);
    return UAInteractiveChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/charts/ua.piechart.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:500px; height:500px\">\r\n<div style=\"display: block\">\r\n    <canvas baseChart\r\n            [data]=\"pieChartData\"\r\n            [labels]=\"pieChartLabels\"\r\n            [chartType]=\"pieChartType\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/charts/ua.piechart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAPieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UAPieChartComponent = (function () {
    function UAPieChartComponent() {
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.piechartoptions = {
            responsive: true
        };
    }
    // events
    UAPieChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    UAPieChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    UAPieChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ua-pie-chart',
            template: __webpack_require__("../../../../../src/app/common/charts/ua.piechart.html")
        })
    ], UAPieChartComponent);
    return UAPieChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/d3charts/ua.discretebar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UADiscreteBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UADiscreteBarComponent = (function () {
    function UADiscreteBarComponent() {
    }
    UADiscreteBarComponent.prototype.ngOnInit = function () {
        this.options = {
            chart: {
                type: 'multiBarChart',
                height: 300,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                showControls: false,
                stacked: false,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis',
                    staggerLabels: false,
                    axisLabelDistance: 5
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    staggerLabels: false,
                    axisLabelDistance: 5
                },
                legendPosition: "right",
                groupSpacing: "0.5",
                reduceXTicks: false
            }
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], UADiscreteBarComponent.prototype, "data", void 0);
    UADiscreteBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ua-discrete-bar',
            template: "\n        <div>\n        <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n        </div>\n    ",
            styles: [__webpack_require__("../../../../nvd3/build/nv.d3.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], UADiscreteBarComponent);
    return UADiscreteBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/d3charts/ua.donutchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UADonutChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UADonutChartComponent = (function () {
    function UADonutChartComponent() {
    }
    UADonutChartComponent.prototype.ngOnInit = function () {
        this.options = {
            chart: {
                type: 'pieChart',
                height: 300,
                x: function (d) { return d.key; },
                y: function (d) { return d.value; },
                showLabels: true,
                labelType: "value",
                duration: 500,
                labelThreshold: 0.05,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                },
                donut: true,
                donutRatio: 0.35,
                legendPosition: "right",
                showTooltipPercent: true,
                growOnHover: false
            }
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], UADonutChartComponent.prototype, "data", void 0);
    UADonutChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ua-donut-chart',
            template: "\n        <div>\n        <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n        </div>\n    ",
            styles: [__webpack_require__("../../../../nvd3/build/nv.d3.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], UADonutChartComponent);
    return UADonutChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/d3charts/ua.piechart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAD3PieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UAD3PieChartComponent = (function () {
    function UAD3PieChartComponent() {
        this.selectedSectionName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.totalCount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UAD3PieChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var total = 0;
        this.options = {
            chart: {
                type: 'pieChart',
                height: 300,
                x: function (d) { return d.key; },
                y: function (d) { return d.value; },
                showLabels: true,
                labelType: "value",
                duration: 500,
                labelThreshold: 0.05,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                },
                legendPosition: "right",
                showTooltipPercent: true,
                growOnHover: false,
                callback: this.callBackFunction.bind(this)
            }
        };
        this.bulgedArc = d3.svg.arc().outerRadius(105);
        this.regularArc = d3.svg.arc().outerRadius(100);
        setTimeout(function () {
            for (var i = 0; i < _this.data.length; i++) {
                total += parseInt(_this.data[i].value);
            }
            _this.totalCount.emit(total);
        }, 500);
    };
    UAD3PieChartComponent.prototype.callBackFunction = function (chart) {
        var prevArc = null;
        var _this = this;
        if (_this.isInteractive) {
            chart.pie.dispatch.on('elementClick', function (e) {
                _this.selectedSectionName.emit(e.data[_this.keyName]);
                if (prevArc) {
                    d3.select(prevArc).classed('clicked', false);
                    d3.select(prevArc).select("path").transition().duration(70).attr('d', _this.regularArc);
                }
                d3.select(e.element).classed('clicked', true);
                d3.select(e.element).select("path").transition().duration(70).attr('d', _this.bulgedArc);
                prevArc = e.element;
            });
        }
        else {
            //return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], UAD3PieChartComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UAD3PieChartComponent.prototype, "keyName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], UAD3PieChartComponent.prototype, "isInteractive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UAD3PieChartComponent.prototype, "selectedSectionName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UAD3PieChartComponent.prototype, "totalCount", void 0);
    UAD3PieChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ua-d3-pie-chart',
            template: "\n        <div>\n        <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n        </div>\n    ",
            styles: [__webpack_require__("../../../../nvd3/build/nv.d3.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], UAD3PieChartComponent);
    return UAD3PieChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/dto/fileNamingConvention.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fileNamingConvention; });
var fileNamingConvention = (function () {
    function fileNamingConvention(filePrefix, chartOneSuffix, chartTwoSuffix, tableSuffix) {
        this.filePrefix = "";
        this.chartOneSuffix = "";
        this.chartTwoSuffix = "";
        this.tableSuffix = "";
        this.filePrefix = filePrefix;
        this.chartOneSuffix = chartOneSuffix;
        this.chartTwoSuffix = chartTwoSuffix;
        this.tableSuffix = tableSuffix;
    }
    return fileNamingConvention;
}());



/***/ }),

/***/ "../../../../../src/app/common/executions/ua.executionroot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAExecutionRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UAExecutionRootComponent = (function () {
    function UAExecutionRootComponent() {
    }
    UAExecutionRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "execution-root",
            template: "<div>\n        <ua-executions></ua-executions>\n        <ua-new-execution></ua-new-execution>\n    </div>\n    "
        })
    ], UAExecutionRootComponent);
    return UAExecutionRootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/executions/ua.executions.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Place holder for display the list of executions </h1>"

/***/ }),

/***/ "../../../../../src/app/common/executions/ua.executions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAExecutionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UAExecutionsComponent = (function () {
    function UAExecutionsComponent() {
    }
    UAExecutionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-executions",
            template: __webpack_require__("../../../../../src/app/common/executions/ua.executions.component.html")
        })
    ], UAExecutionsComponent);
    return UAExecutionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/executions/ua.new.execution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UANewExecutionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UANewExecutionComponent = (function () {
    function UANewExecutionComponent() {
    }
    UANewExecutionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-new-execution",
            template: __webpack_require__("../../../../../src/app/common/executions/ua.new.execution.html")
        })
    ], UANewExecutionComponent);
    return UANewExecutionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/executions/ua.new.execution.html":
/***/ (function(module, exports) {

module.exports = "<h1>place holder for new executions</h1>\r\n<a routerLink=\"/analysis/inventory\" routerLinkActive=\"active\">inventory</a> \r\n<ua-pie-chart></ua-pie-chart>\r\n<ua-bar-chart></ua-bar-chart>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/header/uaheader.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-default navbar-static-top navbackground col-xs-12 navbarmyapp\" role=\"navigation\" >\r\n\t\r\n \r\n        <ul class = \"nav logo-navbar-nav col-xs-12\">\r\n           <li class=\"col-xs-4\">\r\n              <a>\r\n                  <span><img src=\"upgradeApp/dist/assets/icons/brand.svg\" alt=\"Deloitte\" width=\"135\" height=\"20\"/></span>\r\n              </a>\r\n           </li>\r\n           \r\n          \r\n          <li class=\"col-xs-4 tool-logo text-center padding-top-5\">\r\n              <span><img src=\"upgradeApp/dist/assets/icons/toolLogo.png\" alt=\"Uplgrade Analyzer \"/></span>\r\n          </li>\r\n          <li class=\"col-xs-4 pull-right client-section\">\r\n              <a><div class=\"pull-right\">Hi , Client Name !!</div></a>\r\n          </li>\r\n          \r\n          \r\n        </ul> \r\n    </nav>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/common/header/uaheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UAHeaderComponent = (function () {
    function UAHeaderComponent() {
    }
    UAHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-header",
            template: __webpack_require__("../../../../../src/app/common/header/uaheader.component.html")
        })
    ], UAHeaderComponent);
    return UAHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/homepage.html":
/***/ (function(module, exports) {

module.exports = "<ua-header></ua-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/common/impact/ua.impact.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\tImpact page\r\n</div>\r\n\r\n<ua-subtabs [subTabItems]=\"subTabItems\"></ua-subtabs>"

/***/ }),

/***/ "../../../../../src/app/common/impact/ua.impact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAImpactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UAImpactComponent = (function () {
    function UAImpactComponent() {
    }
    UAImpactComponent.prototype.ngOnInit = function () {
        this.subTabItems = [
            {
                key: "defects",
                value: "Incompatibilities",
                required: true
            },
            {
                key: "performance_nh",
                value: "Performance Non-Hana",
                required: true
            },
            {
                key: "performance_h",
                value: "Performance Hana",
                required: true
            },
            {
                key: "usage",
                value: "Usage",
                required: false
            }
        ];
    };
    UAImpactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-impact",
            template: __webpack_require__("../../../../../src/app/common/impact/ua.impact.component.html")
        })
    ], UAImpactComponent);
    return UAImpactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/inventory/ua.inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view-wrapper col-xs-12 s4-container\">\r\n\t<ua-tiles [tileFileName] = \"tileFileName\"></ua-tiles>\r\n\t<div class=\"graph-label-container col-xs-12\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<b>Custom Inventory Breakup</b>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<b>Custom Developments - Object Breakup</b>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"inventory-graph-container col-xs-12\">\r\n\t\t<ua-interactive-chart [filePrefixSuffix]=\"filePrefixSuffix\" [keyName]=\"keyName\" (selectedSectionName)=\"fetchTable($event)\" [isInteractive]=\"isInteractive\" [view1]=\"view1\" [view2]=\"view2\" ></ua-interactive-chart>\r\n\t</div>\r\n\t<div class=\"col-xs-3 pull-right text-right margin-15\">\r\n\t\t\t\t<a class=\"btn btn-primary\" (click)=\"showTable = !showTable\">Show/Hide Total Data</a>\r\n\t\t\t</div>\r\n\t<div class=\"col-xs-12\" *ngIf=\"showTable\">\r\n\t\t<ua-table  [fileName] = \"tableFileName\"></ua-table>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/inventory/ua.inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAInventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dto_fileNamingConvention__ = __webpack_require__("../../../../../src/app/common/dto/fileNamingConvention.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UAInventoryComponent = (function () {
    function UAInventoryComponent() {
    }
    UAInventoryComponent.prototype.ngOnInit = function () {
        this.filePrefixSuffix = new __WEBPACK_IMPORTED_MODULE_1__dto_fileNamingConvention__["a" /* fileNamingConvention */]("INV_ECC", "_SUMMARY", "_SUMMARY", "");
        this.keyName = "OBJTYPE";
        this.tileFileName = 'INV_ECC_COUNT';
        this.tableFileName = 'INV_ECC_';
        this.showTable = false;
        this.isInteractive = true;
        this.view1 = 'pieChart';
        this.view2 = 'donutchart';
    };
    UAInventoryComponent.prototype.fetchTable = function (selectedSectionName) {
        console.log('table for-' + selectedSectionName);
        this.tableFileName = this.tableFileName + selectedSectionName;
    };
    UAInventoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-inventory",
            template: __webpack_require__("../../../../../src/app/common/inventory/ua.inventory.component.html")
        })
    ], UAInventoryComponent);
    return UAInventoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/navtabs/ua.analysis.navtabs.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\t<nav class=\"navbar navbar-default navbar-static-top navbackground col-xs-12 navbarmyapp\" role=\"navigation\" >\r\n\r\n\t\t<ul class = \"nav navbar-nav col-xs-12 clear-both\">\r\n\t\t\t <li  *ngFor= \"let menuItem of navItems\" class = \"nav-tab\">\r\n\t\t\t\t\r\n\t\t\t\t\t\t<a routerLink=\"/analysis{{menuItem.linkCode}}\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<i  class=\"fa  pull-left fa-2x fa-{{menuItem.iconName}}\"></i>\r\n\t\t\t\t\t<span >{{menuItem.description}}</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t\r\n\t\t</ul> \r\n\t</nav>\r\n\t<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/navtabs/ua.analysis.navtabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAAnalysisNavTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UAAnalysisNavTabsComponent = (function () {
    function UAAnalysisNavTabsComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.navItems = [
            {
                description: 'System Overview',
                linkCode: '/dashboard',
                iconName: 'dashboard'
            },
            {
                description: 'Inventory',
                linkCode: '/inventory',
                iconName: 'university'
            },
            {
                description: 'Impact Ananlysis',
                linkCode: '/impact',
                iconName: 'bar-chart'
            },
            {
                description: 'S/4Hana',
                linkCode: '/sFour',
                iconName: 'mixcloud'
            },
            {
                description: 'Business Process',
                linkCode: '/bpview',
                iconName: 'tasks'
            }
        ];
    }
    UAAnalysisNavTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-navtabs",
            template: __webpack_require__("../../../../../src/app/common/navtabs/ua.analysis.navtabs.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UAAnalysisNavTabsComponent);
    return UAAnalysisNavTabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/navtabs/ua.analysis.root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAAnalysisRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UAAnalysisRootComponent = (function () {
    function UAAnalysisRootComponent() {
    }
    UAAnalysisRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "analysis-root",
            template: "<div>\n        <ua-navtabs></ua-navtabs>\n        \n    </div>\n    "
        })
    ], UAAnalysisRootComponent);
    return UAAnalysisRootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/sfour/ua.sfourhana.component.html":
/***/ (function(module, exports) {

module.exports = "<div>S4tab</div>\r\n<ua-subtabs [subTabItems]=\"subTabItems\"></ua-subtabs>"

/***/ }),

/***/ "../../../../../src/app/common/sfour/ua.sfourhana.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UASFourHanaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UASFourHanaComponent = (function () {
    function UASFourHanaComponent() {
    }
    UASFourHanaComponent.prototype.ngOnInit = function () {
        this.subTabItems = [
            {
                key: "busFunctions",
                value: "Business Functions",
                required: true
            },
            {
                key: "readycheck",
                value: "Readiness Check",
                required: true
            },
            {
                key: "SYCM",
                value: "Code Incompatibilities ",
                required: true
            }
        ];
    };
    UASFourHanaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-sfourhana",
            template: __webpack_require__("../../../../../src/app/common/sfour/ua.sfourhana.component.html")
        })
    ], UASFourHanaComponent);
    return UASFourHanaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/subtabs/ua.subtabs.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"sub-nav  col-xs-12\">\r\n\t<ng-container *ngFor= \"let subTabItem of subTabItems\">\r\n\t\t<li  *ngIf=\"subTabItem.required\"><a >{{subTabItem.value}} </a></li>\r\n\t</ng-container>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/common/subtabs/ua.subtabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UASubTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UASubTabsComponent = (function () {
    function UASubTabsComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], UASubTabsComponent.prototype, "subTabItems", void 0);
    UASubTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-subtabs",
            template: __webpack_require__("../../../../../src/app/common/subtabs/ua.subtabs.component.html")
        })
    ], UASubTabsComponent);
    return UASubTabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/table/ua.charttable.component.html":
/***/ (function(module, exports) {

module.exports = "<table float-thead=\"floatTheadOptions\">\r\n\t<thead >\r\n\t\t<tr class=\"border-bottom\">\r\n\t\t\t<td class=\"col-xs-2 border-right\">S.No.</td>\r\n\t\t\t<td class=\"col-xs-6 border-right\">Component Type</td>\r\n\t\t\t<td class=\"col-xs-4 border-right\">Count</td>\r\n\t\t</tr>\r\n\t</thead>\r\n\t\r\n\t<tbody>\r\n\t\t<tr class=\"\" *ngFor= \"let item of tableData; let i = index\">\r\n\t\t\t<td class=\"col-xs-2 border-right\">{{i+1}}</td>\r\n\t\t\t<td class=\"col-xs-6 border-right\">{{item.key}}</td>\r\n\t\t\t<td class=\"col-xs-4 border-right\">{{item.value}}</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/common/table/ua.charttable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAChartTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UAChartTableComponent = (function () {
    function UAChartTableComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], UAChartTableComponent.prototype, "tableData", void 0);
    UAChartTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-chart-table",
            template: __webpack_require__("../../../../../src/app/common/table/ua.charttable.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], UAChartTableComponent);
    return UAChartTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/table/ua.table.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- \t\t\r\n\t\t<ul> \r\n\t\t\t<ng-container >\r\n\t\t\t\t<li  *ngIf=\"tableItem.required\"><a >{{tableItem.value}} </a></li>\r\n\t\t\t</ng-container>\r\n\t\t</ul>\r\n -->\r\n\r\n\t<div class=\"search-selector pull-left\">\r\n\t\t<span>\r\n\t\t\t<label for=\"categorySelect\">Select a category:</label>\r\n\t\t    <select name=\"categorySelect\" id=\"categorySelect\" ng-model=\"searchCategory\">\r\n\t\t    \t\r\n\t\t    \t\t<option *ngFor= \"let tableItem of tableHeader | Jsonkeys \"  value=\"{{tableItem.key}}\">{{tableItem.value}}</option>\r\n\t\t    \t\r\n\t\t    </select>\r\n\t    </span>\r\n\t    <span>\r\n\t    \t<label for=\"searchText\">Search text:</label>\r\n\t    \t<input name=\"searchText\" type=\"text\" ng-model=\"searchText\">\r\n\t    </span>\r\n\t</div>\r\n\t<div class=\"clearfix\"></div>\r\n\t<div class=\"center-section\">\r\n\t\t<table float-thead=\"floatTheadOptions\" ng-model=\"tabularData\" class=\"col-xs-12\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr class=\"border-bottom\">\r\n\t\t\t\t\t<td *ngFor= \"let tableItem of tableHeader | Jsonkeys\"  class=\"border-right table-header\">\r\n\t\t\t\t\t\t<span >{{tableItem.value}}</span>\r\n\t\t\t\t\t\t<span class=\"fa fa-sort\"></span>\r\n\t\t\t\t\t\t<span class=\"fa fa-sort-asc\" ></span>\r\n\t\t\t\t\t\t<span class=\"fa fa-sort-desc\"></span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\r\n\t\t\t\t<tr *ngFor= \"let tableBodyItem of  tableData \">\r\n\t\t\t\t\t<td  *ngFor= \"let tbodyItem of  tableBodyItem | Jsonkeys\"  class=\"border-right\">{{tbodyItem.value}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/common/table/ua.table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UATableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetch_file_service__ = __webpack_require__("../../../../../src/app/fetch-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UATableComponent = (function () {
    function UATableComponent(FetchFileService) {
        this.FetchFileService = FetchFileService;
    }
    UATableComponent.prototype.ngOnInit = function () {
        this.tableData = [];
        this.tableBody = [];
        this.getTableData();
    };
    UATableComponent.prototype.getTableData = function () {
        var _this = this;
        this.fileName = this.fileName.trim();
        if (!this.fileName) {
            return;
        }
        this.FetchFileService.getFileData(this.fileName)
            .subscribe(function (tableResponse) {
            _this.tableData = tableResponse.fileContentMappedData,
                _this.tableHeader = _this.tableData[0],
                _this.tableData.splice(0, 1);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UATableComponent.prototype, "fileName", void 0);
    UATableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-table",
            template: __webpack_require__("../../../../../src/app/common/table/ua.table.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fetch_file_service__["a" /* FetchFileService */]])
    ], UATableComponent);
    return UATableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/tiles/ua.tile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"totals-container col-xs-12\">\r\n\t<div class=\"totals-box col-xs-2 status-{{tileItem.color}}\"  *ngFor= \"let tileItem of tileItems\">\r\n\t\t<p class=\"totals-numeric\"> {{tileItem.value | number}}</p>\r\n\t\t<p class=\"totals-text\">{{tileItem.key}}</p>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/tiles/ua.tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UATilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetch_file_service__ = __webpack_require__("../../../../../src/app/fetch-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UATilesComponent = (function () {
    function UATilesComponent(FetchFileService) {
        this.FetchFileService = FetchFileService;
    }
    UATilesComponent.prototype.ngOnInit = function () {
        this.tileItems = [];
        this.getTilesData();
    };
    UATilesComponent.prototype.getTilesData = function () {
        var _this = this;
        this.tileFileName = this.tileFileName.trim();
        if (!this.tileFileName) {
            return;
        }
        this.FetchFileService.getFileData(this.tileFileName)
            .subscribe(function (tableResponse) { return _this.tileItems = tableResponse.fileContentMappedData; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UATilesComponent.prototype, "tileFileName", void 0);
    UATilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "ua-tiles",
            template: __webpack_require__("../../../../../src/app/common/tiles/ua.tile.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fetch_file_service__["a" /* FetchFileService */]])
    ], UATilesComponent);
    return UATilesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fetch-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Observable class extensions


// Observable operators



var FetchFileService = (function () {
    function FetchFileService(http) {
        this.http = http;
        this.fileUrl = '/upgradeApp/app/api/getFileContent';
    }
    FetchFileService.prototype.getFileData = function (name) {
        var url = this.fileUrl + '?fileKey=' + name;
        return this.http.get(url)
            .do(function (data) { return console.log('success'); })
            .catch(this.handleError);
    };
    FetchFileService.prototype.handleError = function (error) {
        console.log(error);
        var message = 'Error status code ${error.status} at ${error.url}';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(message);
    };
    FetchFileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FetchFileService);
    return FetchFileService;
}());



/***/ }),

/***/ "../../../../../src/app/file-data-transform-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (arrayList, args) {
        var keys = [];
        for (var key in arrayList) {
            keys.push({ key: key, value: arrayList[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'Jsonkeys' })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/app/ua.app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UAAppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_executions_ua_executionroot_component__ = __webpack_require__("../../../../../src/app/common/executions/ua.executionroot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_navtabs_ua_analysis_root_component__ = __webpack_require__("../../../../../src/app/common/navtabs/ua.analysis.root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_inventory_ua_inventory_component__ = __webpack_require__("../../../../../src/app/common/inventory/ua.inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_impact_ua_impact_component__ = __webpack_require__("../../../../../src/app/common/impact/ua.impact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_sfour_ua_sfourhana_component__ = __webpack_require__("../../../../../src/app/common/sfour/ua.sfourhana.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_bp_ua_bp_component__ = __webpack_require__("../../../../../src/app/common/bp/ua.bp.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/analysis/inventory', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__common_executions_ua_executionroot_component__["a" /* UAExecutionRootComponent */] },
    { path: 'analysis', component: __WEBPACK_IMPORTED_MODULE_3__common_navtabs_ua_analysis_root_component__["a" /* UAAnalysisRootComponent */], children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__common_executions_ua_executionroot_component__["a" /* UAExecutionRootComponent */] },
            { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_4__common_inventory_ua_inventory_component__["a" /* UAInventoryComponent */] },
            { path: 'impact', component: __WEBPACK_IMPORTED_MODULE_5__common_impact_ua_impact_component__["a" /* UAImpactComponent */] },
            { path: 'performance', component: __WEBPACK_IMPORTED_MODULE_2__common_executions_ua_executionroot_component__["a" /* UAExecutionRootComponent */] },
            { path: 'sFour', component: __WEBPACK_IMPORTED_MODULE_6__common_sfour_ua_sfourhana_component__["a" /* UASFourHanaComponent */] },
            { path: 'bpview', component: __WEBPACK_IMPORTED_MODULE_7__common_bp_ua_bp_component__["a" /* UABPComponent */] }
        ] },
];
var UAAppRoutingModule = (function () {
    function UAAppRoutingModule() {
    }
    UAAppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], UAAppRoutingModule);
    return UAAppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map