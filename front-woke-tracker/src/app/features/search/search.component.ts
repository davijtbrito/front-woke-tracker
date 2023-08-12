import { Component, ViewChild } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { ColDef } from 'ag-grid-community';
import { SearchApi } from '../services/search-api.service';
import { AgGridAngular } from 'ag-grid-angular';
import { SimplePopupComponent } from 'src/app/layout/simple-popup/simple-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchCategory } from '../models/search-category.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchKeyword!: string;

  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  searchResults: SearchResult[] = [];

  public columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' }    
  ];

  constructor(private searchApi: SearchApi, private dialog: MatDialog) { }

  search() {
    this.searchResults = [];
    if (!this.isNullOrBlank(this.searchKeyword)) {
      this.searchApi.searchByKeyword(this.searchKeyword).subscribe(data => {
        this.searchResults = data;
        this.agGrid.api.setRowData(this.searchResults); // Update ag-Grid data
        this.agGrid.api.refreshCells(); // Refresh the ag-Grid cells
      });
    }
  }

  onCellClicked(event: { column: { getColId: () => string; }; data: { id: number; category: string }; }) {
    if (event.column.getColId() === 'name') {      

      if (event.data.category === SearchCategory.COMPANY) {

        this.searchApi.getCompany(event.data.id).subscribe(data => {

          const dialogRef = this.dialog.open(SimplePopupComponent, {
            width: '400px', // Set the desired width
            data: data
          });

        });

      }else if (event.data.category === SearchCategory.INSTITUTION) {

        this.searchApi.getInstitution(event.data.id).subscribe(data => {

          const dialogRef = this.dialog.open(SimplePopupComponent, {
            width: '400px', // Set the desired width
            data: data
          });

        });
      }else if (event.data.category === SearchCategory.PUBLIC_FIGURE) {

        this.searchApi.getPublicFigure(event.data.id).subscribe(data => {

          const dialogRef = this.dialog.open(SimplePopupComponent, {
            width: '400px', // Set the desired width
            data: data
          });

        });
      }
    }
  }

  private isNullOrBlank(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
  }
}
