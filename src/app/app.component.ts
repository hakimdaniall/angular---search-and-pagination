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
  searchText: any = '';
  pageOfItems!: Array<any>;
  topTenUni: any
  showTop10: boolean = false;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(Response => {      
      this.list = Response
      this.topTenUni = this.list.slice(0,10)
      console.log(this.topTenUni)
      return this.topTenUni
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  toggleTop10(e: any) {
    if (this.pageOfItems) {
      this.showTop10 = !this.showTop10
    }
  }
}
