import { Component, OnInit } from '@angular/core';

import { NewsRelatedService } from '../../../services/news-related.service';

@Component({
  selector: 'app-news-related',
  templateUrl: './news-related.component.html',
  styleUrls: ['./news-related.component.scss']
})
export class NewsRelatedComponent {

  safeUrls: string[] = [];

  constructor(private newsApi: NewsRelatedService){ 
    this.newsApi.getNewsRelated().subscribe((response) => {      
      this.safeUrls = response;
    });
  }
}
