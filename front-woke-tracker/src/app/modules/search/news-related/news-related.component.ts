import { Component, OnInit } from '@angular/core';

import { NewsRelatedService } from '../../../services/news-related.service';
import { SearchDetail } from 'src/app/reference/models/search-detail.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { GenericEntityDto } from 'src/app/reference/models/generic-entity-dto.model';

@Component({
  selector: 'app-news-related',
  templateUrl: './news-related.component.html',
  styleUrls: ['./news-related.component.scss']
})
export class NewsRelatedComponent {

  safeUrls: string[] = [];
  data!: SearchDetail;

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
    this.newsApi.getNewsRelated(this.sharedApi).subscribe((response) => {      
      this.safeUrls = response;
    });
  }
}
