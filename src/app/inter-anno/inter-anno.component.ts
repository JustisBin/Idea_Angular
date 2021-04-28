import { Component, OnInit } from '@angular/core';
import { inter_list } from './inter_list'

@Component({
  selector: 'app-inter-anno',
  templateUrl: './inter-anno.component.html',
  styleUrls: ['./inter-anno.component.css']
})
export class InterAnnoComponent implements OnInit {
  inter_list = inter_list
  constructor() { }

  ngOnInit(): void {
  }

}
