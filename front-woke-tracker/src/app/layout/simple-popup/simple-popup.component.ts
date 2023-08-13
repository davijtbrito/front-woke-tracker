import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchDetail } from 'src/app/reference/models/search-detail.model';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss']
})
export class SimplePopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: SearchDetail) {}

}
