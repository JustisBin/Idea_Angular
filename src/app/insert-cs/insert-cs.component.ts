import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-insert-cs',
  templateUrl: './insert-cs.component.html',
  styleUrls: ['./insert-cs.component.css']
})
export class InsertCsComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    alert('게시글이 등록되었습니다!');
  }
}
