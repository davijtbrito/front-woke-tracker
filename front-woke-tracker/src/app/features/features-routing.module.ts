import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummieComponent } from './dummie/dummie.component';

const routes: Routes = [{ path: '', component: DummieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
