import { Component, OnInit } from '@angular/core';
import { anno_list } from './anno_list'

@Component({
  selector: 'app-anno-board',
  templateUrl: './anno-board.component.html',
  styleUrls: ['./anno-board.component.css']
})
export class AnnoBoardComponent implements OnInit {
  anno_list = anno_list;
  constructor() { }

  ngOnInit(): void {
  }

}
