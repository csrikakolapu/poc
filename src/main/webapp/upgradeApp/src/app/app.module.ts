import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UAAppRoutingModule } from './ua.app.routing.module';
import { ChartsModule } from 'ng2-charts';
import { UAHeaderComponent } from './common/header/uaheader.component';
import { UAExecutionRootComponent } from './common/executions/ua.executionroot.component';
import { UAExecutionsComponent } from './common/executions/ua.executions.component';
import { UANewExecutionComponent } from './common/executions/ua.new.execution.component';
import { UAAnalysisRootComponent } from './common/navtabs/ua.analysis.root.component';
import { UAAnalysisNavTabsComponent } from './common/navtabs/ua.analysis.navtabs.component';

import { UABarChartComponent } from './common/charts/ua.barchart';
import { UAInventoryComponent } from './common/inventory/ua.inventory.component';
import { UAImpactComponent } from './common/impact/ua.impact.component';
import { UABPComponent } from './common/bp/ua.bp.component';
import { UASFourHanaComponent } from './common/sfour/ua.sfourhana.component';
import { UATilesComponent } from './common/tiles/ua.tile.component';
import { UASubTabsComponent } from './common/subtabs/ua.subtabs.component';
import { UATableComponent } from './common/table/ua.table.component';
import { NvD3Module } from 'ng2-nvd3';
import { UADiscreteBarComponent } from './common/d3charts/ua.discretebar';
import { UAPieChartComponent } from './common/d3charts/ua.piechart';
import { UADonutChartComponent } from './common/d3charts/ua.donutchart';
import { UAChartTableComponent } from './common/table/ua.charttable.component';

import 'd3';
import 'nvd3';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    AppComponent,
    UAHeaderComponent,
    UAExecutionRootComponent,
    UAExecutionsComponent, 
    UANewExecutionComponent,
    UAAnalysisRootComponent,
    UAAnalysisNavTabsComponent,
    UABarChartComponent,
    UAInventoryComponent,
    UAImpactComponent,
    UABPComponent,
    UASFourHanaComponent,
    UATilesComponent,
    UASubTabsComponent,
    UATableComponent,
    UADiscreteBarComponent,
    UAPieChartComponent,
    UAChartTableComponent,
    UADonutChartComponent
  ],
  imports: [
    BrowserModule,
    UAAppRoutingModule,
    ChartsModule,
    HttpClientModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [
    AppComponent 
    ]
})
export class AppModule { }
