import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanyApi {
  private apiUrl = environment.apiBaseUrl;

  
  constructor(private http: HttpClient) {}

  searchCompanyByKeyword(keyword: string) {
    const endpoint = this.apiUrl + '/company/find?keyword=' + keyword;
    return this.http.get(endpoint);
  }
}
