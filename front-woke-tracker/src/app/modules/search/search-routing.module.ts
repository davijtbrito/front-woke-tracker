import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { MainComponent } from './main/main.component';
import { ResultSearchComponent } from './result-search/result-search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'main', component: MainComponent },
  { path: 'result-search/:keyword', component: ResultSearchComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
