import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.css']
})
export class ResetPwComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    alert('비밀번호가 재설정 되었습니다.')
  }
}
