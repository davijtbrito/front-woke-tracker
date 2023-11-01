import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ResultSearchComponent } from './result-search/result-search.component';
import { AgGridModule } from 'ag-grid-angular';
import { SearchCategoryPipe } from 'src/app/reference/pipes/search-category.pipe';


@NgModule({
  declarations: [
    SearchComponent,    
    MainComponent, 
    ResultSearchComponent,
    SearchCategoryPipe
  ],
  imports: [
    CommonModule,
    CommonModule,
    AgGridModule,
    FormsModule,
    SearchRoutingModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
