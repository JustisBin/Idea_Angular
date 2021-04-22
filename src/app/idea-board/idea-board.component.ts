import { Component, OnInit } from '@angular/core';
import { rank } from './rank';
import { idea_list } from './idea_list'
@Component({
  selector: 'app-idea-board',
  templateUrl: './idea-board.component.html',
  styleUrls: ['./idea-board.component.css']
})
export class IdeaBoardComponent implements OnInit {
  rank = rank;
  idea_list = idea_list;
  constructor() { }

  ngOnInit(): void {
  }

}
