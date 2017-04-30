import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';


import { WelcomeComponent } from './home/welcome/welcome.component';
import { wmsodsComponent } from './wmsods/wmsods.component';
import { legacyComponent } from './legacy/legacy.component';

import { SchemaObjectsModule } from './schemaobjects/schemaobjects.module';
import { schemaobjectsListComponent } from './schemaobjects/schemaobjects-list.components';
import { schemaobjectsFilterPipe } from './schemaobjects/schemaobjects-filter.pipe';

import { TableColumnsModule } from './tablecolumns/tablecolumns.module';
import { tablecolumnsListComponent } from './tablecolumns/tablecolumns-list.components';
import { tablecolumnsFilterPipe } from './tablecolumns/tablecolumns-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    WelcomeComponent
    ,wmsodsComponent
    , legacyComponent
    ,schemaobjectsListComponent
    ,schemaobjectsFilterPipe
    ,tablecolumnsListComponent
    ,tablecolumnsFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
        RouterModule.forRoot([
      { path: 'TableColumns', component: tablecolumnsListComponent },
      
      { path: 'wmsods', component: wmsodsComponent },
      { path: 'legacy', component: legacyComponent },

      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
    , SchemaObjectsModule
    , TableColumnsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
