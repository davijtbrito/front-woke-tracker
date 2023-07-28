import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  keyword: string = '';
  gridData: any[] = []; // This array will hold the data fetched from the endpoint

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Read the 'keyword' parameter from the URL
    this.route.queryParams.subscribe(params => {
      this.keyword = params['keyword'] || '';
      this.fetchData();
    });
  }

  fetchData(): void {  
    
    const endpointUrl = 'http://127.0.0.1:8081/company/find?keyword=' + this.keyword;

    this.http.get<any[]>(endpointUrl).subscribe(
      (data) => {        
        this.gridData = data; 
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
