import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  searchKeyword!: string;  

  constructor(private router: Router,
    private sharedApi: SharedDataService) {}

  ngOnInit(): void {
    this.searchKeyword = '';
  }

  navigateToComponent() {    
    if (!this.isNullOrBlank(this.searchKeyword)){
      this.sharedApi.searchKeyword = this.searchKeyword;
      this.router.navigate(['search/result-search']);
    }    
  }

  private isNullOrBlank(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
  }
}
