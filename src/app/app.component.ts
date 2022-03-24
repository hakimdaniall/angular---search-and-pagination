import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = `http://universities.hipolabs.com/search?country=United+States`;
  list: any = [];
  searchText: any;
  pageOfItems!: Array<any>;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(Response => {      
      this.list = Response
      console.log(this.list)
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
