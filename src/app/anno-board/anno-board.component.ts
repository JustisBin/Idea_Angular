import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-anno-board',
  templateUrl: './anno-board.component.html',
  styleUrls: ['./anno-board.component.css']
})
export class AnnoBoardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  anno_list: any = [];
  pages: any = [];
  currentPage: number = 1;
  searchTitle: string = "";

  ngOnInit(): void {
    this.http.get<any>('http://152.67.207.28:3000/board/anno/page').subscribe(data => {
      this.pages = data
    })

    this.http.get<any>(`http://152.67.207.28:3000/board/anno/listanno?page=1&pageSize=10`).subscribe(data => {
      this.anno_list = data
    })
  }

  setPage(page: number) {
    this.http.get<any>(`http://152.67.207.28:3000/board/anno/listanno?page=${page}&pageSize=10`).subscribe(data => {
      this.anno_list = data
    })
  }

  search() {

  }
}
