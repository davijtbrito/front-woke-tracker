import { Component, OnInit, ViewChild } from '@angular/core';

import { ColDef } from 'ag-grid-community';

import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';
import { SearchResult } from '../../../reference/models/search-result.model';
import { SearchApiService } from '../../../services/search-api.service';
import { SearchCategory } from '../../../reference/enums/search-category.enum';
import { SearchCategoryPipe } from 'src/app/reference/pipes/search-category.pipe';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SearchDetail } from 'src/app/reference/models/search-detail.model';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
  providers: [SearchCategoryPipe]
})
export class ResultSearchComponent {

  searchKeyword: string = '';

  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  searchResults: SearchResult[] = [];

  public columnDefs: ColDef[] = [
    { field: 'name', width: this.calculateColumnWidth()},
    { field: 'category', valueFormatter: (params) => this.categoryPipe.transform(params.value)}    
  ];

  constructor(private searchApi: SearchApiService, 
    private dialog: MatDialog, 
    private route: ActivatedRoute,
    private sharedData: SharedDataService,
    private router: Router,    
    private categoryPipe: SearchCategoryPipe) { }

  ngOnInit(): void {
    const paramName = 'keyword';
    const paramMap = this.route.snapshot.paramMap;

    if (paramMap.has(paramName)) {
      this.searchKeyword = paramMap.get(paramName)!;
      this.search();

    } else {
      // Handle the case when the parameter is not provided
      this.searchKeyword = ''; // Set a default value or handle as needed
    }
  }

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

          this.sharedData.searchDetail = <SearchDetail> data;
          this.router.navigate(["/news-related"]);
        });

      }else if (event.data.category === SearchCategory.INSTITUTION) {

        this.searchApi.getInstitution(event.data.id).subscribe(data => {

          this.sharedData.searchDetail = <SearchDetail> data;
          this.router.navigate(["/news-related"]);
        });

      }else if (event.data.category === SearchCategory.PUBLIC_FIGURE) {

        this.searchApi.getPublicFigure(event.data.id).subscribe(data => {          
                    
          this.sharedData.searchDetail = <SearchDetail> data;
          this.router.navigate(["/news-related"]);
        });

      }
    }
  }

  private isNullOrBlank(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
  }

  private calculateColumnWidth(): number {
    const screenWidth = window.innerWidth;
    // Calculate the desired percentage of the screen width
    const percentage = 0.7; // Adjust this value as needed
    return screenWidth * percentage;
  }
}
