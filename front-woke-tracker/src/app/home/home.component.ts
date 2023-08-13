import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  searchKeyword!: string;  

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.searchKeyword = '';
  }

  navigateToComponent() {    
    if (!this.isNullOrBlank(this.searchKeyword)){
      this.router.navigate(['features/search/' + this.searchKeyword]);
    }    
  }

  private isNullOrBlank(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
  }
}
