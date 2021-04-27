import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-pw',
  templateUrl: './find-pw.component.html',
  styleUrls: ['./find-pw.component.css']
})
export class FindPwComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    alert('메일이 발송되었습니다.');
  }
}
