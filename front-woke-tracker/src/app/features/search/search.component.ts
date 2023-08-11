import { Component } from '@angular/core';
import { CompanyApi } from '../services/company-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchKeyword: string = '';
  companyResults: any[] = [];
  error: string | null = null;

  constructor(private apiService: CompanyApi) {}

  searchCompany() {    
    this.apiService.searchCompanyByKeyword(this.searchKeyword)
      .subscribe(
        (data: any) => {
          this.companyResults = data; // Assuming the API response is an array of companies
          this.error = null;
        },
        (error) => {
          this.error = error.message || 'An error occurred during the search.';
          this.companyResults = [];
        }
      );
  }
}
