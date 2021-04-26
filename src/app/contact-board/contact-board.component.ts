import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-contact-board',
  templateUrl: './contact-board.component.html',
  styleUrls: ['./contact-board.component.css']
})
export class ContactBoardComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    alert('문의가 접수되었습니다!');
  }
}
