import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-member',
  templateUrl: './signup-member.component.html',
  styleUrls: ['./signup-member.component.css']
})
export class SignupMemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    alert('회원가입이 완료되었습니다!')
  }
}
