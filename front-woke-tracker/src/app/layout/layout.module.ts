import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,    
    SimplePopupComponent
  ],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatChipsModule,
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, SimplePopupComponent]
})
export class LayoutModule { }
