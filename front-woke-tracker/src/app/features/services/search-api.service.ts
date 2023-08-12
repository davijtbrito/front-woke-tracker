import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export class SearchApi {
  private apiUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}

  searchByKeyword(keyword: string): Observable<SearchResult[]> {
    const endpoint = this.apiUrl + '/search/find?keyword=' + keyword;
    return this.http.get<SearchResult[]>(endpoint);
  }
}
