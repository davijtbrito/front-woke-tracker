import { Component, OnInit, ViewChild } from '@angular/core';

import { NewsRelatedService } from '../../../services/news-related.service';
import { SearchDetail } from 'src/app/reference/models/search-detail.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { GenericEntityDto } from 'src/app/reference/models/generic-entity-dto.model';
import { ColDef, GridOptions } from 'ag-grid-community';
import { UrlList } from 'src/app/reference/models/url-list.model';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-news-related',
  templateUrl: './news-related.component.html',
  styleUrls: ['./news-related.component.scss']
})
export class NewsRelatedComponent {

  safeUrls: UrlList[] = [];
  data!: SearchDetail;

  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  gridOptions: GridOptions = {
    columnDefs: [
      { field: "url", filter: true}    
    ]
  }  

  constructor(private newsApi: NewsRelatedService,
    private sharedApi: SharedDataService){
      this.data = this.sharedApi.searchDetail;      
  }

  listNewsRelated(connection: GenericEntityDto){
    this.sharedApi.newsRelatedEntity = {
      id: this.data.detail.id,
      category: this.data.category,
      name: ""
    };

    this.sharedApi.newsRelatedConnection = connection;
    this.safeUrls = [];
    this.newsApi.getNewsRelated(this.sharedApi).subscribe((response => {
      response.forEach(r => {        
        this.safeUrls.push({ url: r });
        this.agGrid.api.setRowData(this.safeUrls);
        this.agGrid.api.sizeColumnsToFit();
        this.agGrid.api.refreshCells();        
      });
    }));
  }
}
