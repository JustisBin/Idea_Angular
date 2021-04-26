import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-insert-idea',
  templateUrl: './insert-idea.component.html',
  styleUrls: ['./insert-idea.component.css']
})
export class InsertIdeaComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    alert('게시글이 등록되었습니다!');
  }
}