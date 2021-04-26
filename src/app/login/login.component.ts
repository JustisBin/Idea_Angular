import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  pw = new FormControl('');
  constructor() { }

  submit() {
    alert('로그인에 성공하였습니다!');
  }

  ngOnInit(): void {
  }

}
