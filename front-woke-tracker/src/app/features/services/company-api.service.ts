import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { SearchResult } from '../models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyApi {
  private apiUrl = environment.apiBaseUrl;

  
  constructor(private http: HttpClient) {}

  searchCompanyByKeyword(keyword: string): Observable<Company[]> {
    const endpoint = this.apiUrl + '/company/find?keyword=' + keyword;
    return this.http.get<Company[]>(endpoint);
  }
}
