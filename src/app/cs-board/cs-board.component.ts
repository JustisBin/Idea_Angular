import { Component, OnInit } from '@angular/core';
import { cs_list } from './cs_list'

@Component({
  selector: 'app-cs-board',
  templateUrl: './cs-board.component.html',
  styleUrls: ['./cs-board.component.css']
})
export class CsBoardComponent implements OnInit {
  cs_list = cs_list
  constructor() { }

  ngOnInit(): void {
  }

}
