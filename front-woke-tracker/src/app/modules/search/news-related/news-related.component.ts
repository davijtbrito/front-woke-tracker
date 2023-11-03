import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SearchCategory } from 'src/app/reference/enums/search-category.enum';
import { GenericEntityDto } from 'src/app/reference/models/generic-entity-dto.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-related',
  templateUrl: './news-related.component.html',
  styleUrls: ['./news-related.component.scss']
})
export class NewsRelatedComponent implements AfterViewChecked {

  safeUrls: string[] = [];

  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer){
    this.getNewsRelated();
  }

  ngAfterViewChecked(): void {
    //this.getNewsRelated();
  }

  getNewsRelated(){
    const endpoint = environment.apiBaseUrl + '/news/news-related';

    const entity: GenericEntityDto = {
      id: 1,
      category: SearchCategory.PUBLIC_FIGURE
    }

    const connection: GenericEntityDto = {
      id: 6,
      category: SearchCategory.COMPANY
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify( {entity, connection} );    

    this.http.post<string[]>(endpoint, body, { headers }).subscribe((response) => {
      console.log("response: " + JSON.stringify(response));
      this.safeUrls = response;
    });
    
  }
}
