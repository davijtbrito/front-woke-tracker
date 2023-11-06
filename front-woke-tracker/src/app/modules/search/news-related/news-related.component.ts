import { Component, OnInit, ViewChild } from '@angular/core';

import { NewsRelatedService } from '../../../services/news-related.service';
import { SearchDetail } from 'src/app/reference/models/search-detail.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { GenericEntityDto } from 'src/app/reference/models/generic-entity-dto.model';
import { ColDef, GridOptions } from 'ag-grid-community';
import { UrlList } from 'src/app/reference/models/url-list.model';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/layout/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogData } from 'src/app/layout/models/confirmation-dialog-data.model';

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
    public dialog: MatDialog,
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

  getSelectedNode(params: any){
    if (params.column && params.data){
      const confParams: ConfirmationDialogData = {
        message: "Do you want to open the selected link?",
        title: "Confirmation",
        acceptStr: "accept"
      };

      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {data: confParams});

      dialogRef.afterClosed().subscribe((confirmation: string) => {                
        if (confirmation === confParams.acceptStr){        
          const cellValue = params.data[params.column.getColId()];
          window.open(cellValue, "_blank");   
        }
      });      
    }    
  }
}
