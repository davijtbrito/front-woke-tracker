import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institution } from '../models/institution.model';

@Injectable({
  providedIn: 'root',
})
export class InstitutionApi {
  private apiUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}

  searchByKeyword(keyword: string): Observable<Institution[]> {
    const endpoint = this.apiUrl + '/institution/find?keyword=' + keyword;
    return this.http.get<Institution[]>(endpoint);
  }
}
