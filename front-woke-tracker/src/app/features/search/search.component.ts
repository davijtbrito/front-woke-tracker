import { Component, ViewChild  } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { ColDef } from 'ag-grid-community';
import { SearchApi } from '../services/search-api.service';
import { AgGridAngular } from 'ag-grid-angular';

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
    { headerName:'Name', field: 'name'},    
    { headerName:'Category', field: 'category' }
  ];

  constructor(private searchApi: SearchApi) {}

  search(){
    this.searchResults = [];    
    if (!this.isNullOrBlank(this.searchKeyword)){                     
      this.searchApi.searchByKeyword(this.searchKeyword).subscribe(data => {
        this.searchResults = data;
        this.agGrid.api.setRowData(this.searchResults); // Update ag-Grid data
        this.agGrid.api.refreshCells(); // Refresh the ag-Grid cells
      });  
    }
  }

  private isNullOrBlank(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
}
}
