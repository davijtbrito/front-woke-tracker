import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DummieComponent } from './dummie/dummie.component';


@NgModule({
  declarations: [    
    DummieComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]  
})
export class FeaturesModule { }
