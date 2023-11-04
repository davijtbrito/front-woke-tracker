import { Component, OnInit } from '@angular/core';

import { NewsRelatedService } from '../../../services/news-related.service';
import { SearchDetail } from 'src/app/reference/models/search-detail.model';
import { SharedDataService } from 'src/app/services/shared-data.service';

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
      console.log("this.data: " + JSON.stringify(this.data));
  }

  listNewsRelated(){
    this.newsApi.getNewsRelated().subscribe((response) => {      
      this.safeUrls = response;
    });
  }
}
