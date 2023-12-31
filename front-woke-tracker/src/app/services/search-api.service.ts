import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../reference/models/search-result.model';
import { Company } from '../reference/models/company.model';
import { Institution } from '../reference/models/institution.model';
import { PublicFigure } from '../reference/models/public-figure.model';
import { SearchModule } from '../modules/search/search.module';

@Injectable({
  providedIn: 'root',
})
export class SearchApiService {
  private apiUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}

  searchByKeyword(keyword: string): Observable<SearchResult[]> {
    const endpoint = this.apiUrl + '/search/find?keyword=' + keyword;
    return this.http.get<SearchResult[]>(endpoint);
  }

  getCompany(id: number): Observable<any> {
    const endpoint = this.apiUrl + '/search/getCompany?id=' + id;
    return this.http.get<Company[]>(endpoint);
  }

  getInstitution(id: number): Observable<any> {
    const endpoint = this.apiUrl + '/search/getInstitution?id=' + id;
    return this.http.get<Institution[]>(endpoint);
  }

  getPublicFigure(id: number): Observable<any> {
    const endpoint = this.apiUrl + '/search/getPF?id=' + id;
    return this.http.get(endpoint);
  }
}
