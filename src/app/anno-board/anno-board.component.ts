import { Component, OnInit } from '@angular/core';
import { anno_list } from './anno_list';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-anno-board',
  templateUrl: './anno-board.component.html',
  styleUrls: ['./anno-board.component.css']
})
export class AnnoBoardComponent implements OnInit {

  anno_id = 0;
  anno_title = "";
  anno_date = "";
  page = 1;
  pageSize = 5;

  anno_list = anno_list;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://152.67.207.28:3000/board/anno/listanno?page=1&pageSize=10').subscribe(data => {
      this.anno_id = data[0].anno_id;
      this.anno_title = data[0].anno_title;
      this.anno_date = data[0].anno_date;
      console.log(this.anno_id)
    })
  }
}
