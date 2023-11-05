import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultSearchComponent } from './result-search/result-search.component';
import { NewsRelatedComponent } from './news-related/news-related.component';

const routes: Routes = [  
  { path: 'news-related', component: NewsRelatedComponent },
  { path: 'result-search', component: ResultSearchComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
