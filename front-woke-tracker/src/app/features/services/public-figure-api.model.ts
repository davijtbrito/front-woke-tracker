import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicFigure } from '../models/public-figure.model';

@Injectable({
  providedIn: 'root',
})
export class PublicFigureApi {
  private apiUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}

  searchByKeyword(keyword: string): Observable<PublicFigure[]> {
    const endpoint = this.apiUrl + '/pf/find?keyword=' + keyword;
    return this.http.get<PublicFigure[]>(endpoint);
  }
}
