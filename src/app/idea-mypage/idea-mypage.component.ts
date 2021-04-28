import { Component, OnInit } from '@angular/core';
import { my_idea } from './my_idea'

@Component({
  selector: 'app-idea-mypage',
  templateUrl: './idea-mypage.component.html',
  styleUrls: ['./idea-mypage.component.css']
})
export class IdeaMypageComponent implements OnInit {
  my_idea = my_idea
  constructor() { }

  ngOnInit(): void {
  }

}
