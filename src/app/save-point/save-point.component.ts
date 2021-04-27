import { Component, OnInit } from '@angular/core';
import { save_point_list } from "./save_point_list";

@Component({
  selector: 'app-save-point',
  templateUrl: './save-point.component.html',
  styleUrls: ['./save-point.component.css']
})
export class SavePointComponent implements OnInit {
  save_point_list = save_point_list
  constructor() { }

  ngOnInit(): void {
  }

}
