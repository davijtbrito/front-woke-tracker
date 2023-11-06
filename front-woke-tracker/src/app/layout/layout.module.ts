import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,    
    FooterComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    MatDialogModule,    
    MatIconModule,
    MatChipsModule,
    MatButtonModule,    
    MatDividerModule,
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, ConfirmationDialogComponent]
})
export class LayoutModule { }
