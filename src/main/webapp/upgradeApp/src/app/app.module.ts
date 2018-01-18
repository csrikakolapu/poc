import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavMenuComponent} from './topnavmenu.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, TopNavMenuComponent]
})
export class AppModule { }
