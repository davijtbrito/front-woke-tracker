import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DummieComponent } from './dummie/dummie.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [    
    DummieComponent, SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    FeaturesRoutingModule
  ],
  exports: [SearchComponent]  
})
export class FeaturesModule { }
