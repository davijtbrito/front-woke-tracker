import { Component } from '@angular/core';
import { CompanyApi } from '../services/company-api.service';
import { SearchResult } from '../models/search-result.model';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchKeyword: string = '';  
  error: string | null = null;

  searchResults: SearchResult[] = [];

  constructor(private apiService: CompanyApi) {}

  searchCompany() {    
    this.apiService.searchCompanyByKeyword(this.searchKeyword)
      .subscribe((data) => {
          this.searchResults = data.map( item => ({
            name: item.companyName,
            category: "COMPANY",
           }));

          //this.companyResults = data;
          this.error = null;
        },
        (error) => {
          this.error = error.message || 'An error occurred during the search.';
          this.searchResults = [];
        }
      );
  }
}
