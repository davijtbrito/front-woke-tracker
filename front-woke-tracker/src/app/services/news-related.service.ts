import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GenericEntityDto } from 'src/app/reference/models/generic-entity-dto.model';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root',
})
export class NewsRelatedService {
  private apiUrl = environment.apiBaseUrl;    

  constructor(private http: HttpClient,
    private sharedData: SharedDataService) {}

  getNewsRelated(): Observable<string[]>{
    const endpoint = environment.apiBaseUrl + '/news/news-related';
    
    const entity: GenericEntityDto = this.sharedData.newsRelatedEntity;
    const connection: GenericEntityDto = this.sharedData.newsRelatedConnection;   
    
    console.log("entity: " + JSON.stringify(entity));
    console.log("connection: " + JSON.stringify(connection));

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify( { entity, connection } );    

    return this.http.post<string[]>(endpoint, body, { headers });    
  }
}
