import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ResultSearchComponent } from './result-search/result-search.component';
import { AgGridModule } from 'ag-grid-angular';
import { SearchCategoryPipe } from 'src/app/reference/pipes/search-category.pipe';
import { NewsRelatedComponent } from './news-related/news-related.component';
import { WokeValuesPipe } from 'src/app/reference/pipes/woke-values.pipe';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SearchComponent,    
    MainComponent, 
    ResultSearchComponent,
    SearchCategoryPipe,    
    WokeValuesPipe,
    NewsRelatedComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    AgGridModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    SearchRoutingModule
  ],    
  exports: [SearchComponent]
})
export class SearchModule { }
