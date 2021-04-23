import { Component, OnInit } from '@angular/core';
import { notice_list } from './notice_list'
@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {
  notice_list = notice_list
  constructor() { }

  ngOnInit(): void {
  }

}
