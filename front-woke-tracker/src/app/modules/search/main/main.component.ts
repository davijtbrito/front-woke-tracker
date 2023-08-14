import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {


  searchKeyword!: string;  

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.searchKeyword = '';
  }

  navigateToComponent() {    
    if (!this.isNullOrBlank(this.searchKeyword)){
      this.router.navigate(['search/result-search/' + this.searchKeyword]);
    }    
  }

  private isNullOrBlank(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
  }
}
