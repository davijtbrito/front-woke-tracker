import { Component } from '@angular/core';
import { CompanyApi } from '../services/company-api.service';
import { SearchResult } from '../models/search-result.model';
import { Company } from '../models/company.model';
import { InstitutionApi } from '../services/intitution-api.service';
import { PublicFigureApi } from '../services/public-figure-api.model';
import { Institution } from '../models/institution.model';
import { PublicFigure } from '../models/public-figure.model';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchKeyword: string = '';  
  error: string | null = null;
  json: string = '';

  companies: Company[] = [];
  institutions: Institution[] = [];
  publicFigures: PublicFigure[] = [];
  searchResults: any[] = [];

  public columnDefs: ColDef[] = [
    { headerName:'Name', field: 'name'},    
    { headerName:'Category', field: 'category' }
  ];

  constructor(private companyApi: CompanyApi, private institutionApi: InstitutionApi, private pfApi: PublicFigureApi) {}

  search(){
    this.searchResults = [];
    if (!this.isNullOrBlank(this.searchKeyword)){          
      this.searchCompany();
      this.searchInstitution();
      this.searchPublicFigure();
      this.unify();
    }
  }

  private searchCompany() {    
    console.log("executing searchCompany...");          

    this.companyApi.searchCompanyByKeyword(this.searchKeyword)
      .subscribe((data) => {          
          this.json = JSON.stringify(data);
          console.log(this.json);

          this.companies = data;
          this.error = null;
        },
        (error) => {
          this.error = error.message || 'An error occurred during the search.';
          this.searchResults = [];
        }
      );      
  }

  private searchInstitution() {    
    this.institutionApi.searchByKeyword(this.searchKeyword)
      .subscribe((data) => {                
          this.json = JSON.stringify(data);
          console.log(this.json);

          this.institutions = data;
          this.error = null;
        },
        (error) => {
          this.error = error.message || 'An error occurred during the search.';
          this.searchResults = [];
        }
      );
  }

  private searchPublicFigure() {    
    this.pfApi.searchByKeyword(this.searchKeyword)
      .subscribe((data) => {
          this.json = JSON.stringify(data);
          console.log(this.json);
          
          this.publicFigures = data;
          this.error = null;
        },
        (error) => {
          this.error = error.message || 'An error occurred during the search.';
          this.searchResults = [];
        }
      );
  }

  private unify(){
    
    this.companies.forEach(item => {
      this.searchResults.push({name: item.companyName, category: "COMPANY"});
    });

    this.institutions.forEach(item => {
      this.searchResults.push({name: item.name, category: "INSTITUTION"});
    });

    this.publicFigures.forEach(item => {
      this.searchResults.push({name: item.name, category: "PUBLIC FIGURE"});
    });
  }

  private isNullOrBlank(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
}
}
