import { Component, OnInit } from '@angular/core';
import { use_point_list } from './use_point_list';

@Component({
  selector: 'app-use-point',
  templateUrl: './use-point.component.html',
  styleUrls: ['./use-point.component.css']
})
export class UsePointComponent implements OnInit {

  use_point_list = use_point_list;

  constructor() { }

  ngOnInit(): void {
  }

}
