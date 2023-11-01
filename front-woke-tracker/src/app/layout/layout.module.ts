import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { WokeValuesPipe } from '../reference/pipes/woke-values.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,    
    SimplePopupComponent,
    WokeValuesPipe
  ],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,    
    MatDividerModule,
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, SimplePopupComponent]
})
export class LayoutModule { }
