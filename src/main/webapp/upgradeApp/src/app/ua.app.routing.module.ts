import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UAExecutionRootComponent } from './common/executions/ua.executionroot.component';
import { UAAnalysisRootComponent } from './common/navtabs/ua.analysis.root.component';
import { UAInventoryComponent } from './common/inventory/ua.inventory.component';
import { UAImpactComponent } from './common/impact/ua.impact.component';
import { UASFourHanaComponent } from './common/sfour/ua.sfourhana.component';
import { UABPComponent } from './common/bp/ua.bp.component';



const routes: Routes = [
  { path: '', redirectTo: '/analysis/inventory', pathMatch: 'full' },
  { path: 'home',  component: UAExecutionRootComponent },
  { path: 'analysis',  component: UAAnalysisRootComponent, children:[
    { path: 'dashboard',  component: UAExecutionRootComponent },
    { path: 'inventory',  component: UAInventoryComponent },
    { path: 'impact',  component: UAImpactComponent },
    { path: 'performance',  component: UAExecutionRootComponent },
    { path: 'sFour',  component: UASFourHanaComponent },
    { path: 'bpview',  component: UABPComponent }
  ] },
  
 
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class UAAppRoutingModule {}
