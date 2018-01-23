import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UAAppRoutingModule } from './ua.app.routing.module';
import { ChartsModule } from 'ng2-charts';
import { UAHeaderComponent } from './common/header/uaheader.component';
import { UAExecutionRootComponent } from './common/executions/ua.executionroot.component';
import { UAExecutionsComponent } from './common/executions/ua.executions.component';
import { UANewExecutionComponent } from './common/executions/ua.new.execution.component';
import { UAAnalysisRootComponent } from './common/navtabs/ua.analysis.root.component';
import { UAAnalysisNavTabsComponent } from './common/navtabs/ua.analysis.navtabs.component';
import { UAPieChartComponent } from './common/charts/ua.piechart';
import { UABarChartComponent } from './common/charts/ua.barchart';
import { UAInventoryComponent } from './common/inventory/ua.inventory.component';
import { UAImpactComponent } from './common/impact/ua.impact.component';
import { UABPComponent } from './common/bp/ua.bp.component';
import { UASFourHanaComponent } from './common/sfour/ua.sfourhana.component';




@NgModule({
  declarations: [
    AppComponent,
    UAHeaderComponent,
    UAExecutionRootComponent,
    UAExecutionsComponent, 
    UANewExecutionComponent,
    UAAnalysisRootComponent,
    UAAnalysisNavTabsComponent,
    UAPieChartComponent,
    UABarChartComponent,
    UAInventoryComponent,
    UAImpactComponent,
    UABPComponent,
    UASFourHanaComponent   

  ],
  imports: [
    BrowserModule,
    UAAppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent 
    ]
})
export class AppModule { }
