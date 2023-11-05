import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { MainComponent } from './main/main.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { NewsRelatedComponent } from './news-related/news-related.component';

const routes: Routes = [
  { path: '', component: SearchComponent, children: [
    { path: 'news-related', component: NewsRelatedComponent },
    { path: 'result-search', component: ResultSearchComponent }
  ]},    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
