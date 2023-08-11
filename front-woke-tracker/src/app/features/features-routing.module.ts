import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummieComponent } from './dummie/dummie.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{ path: '', component: DummieComponent }, 
{ path: 'search', component: SearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
