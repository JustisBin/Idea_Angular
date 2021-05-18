import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anno-board',
  templateUrl: './anno-board.component.html',
  styleUrls: ['./anno-board.component.css']
})
export class AnnoBoardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  server: string = "localhost"
  // 152.67.207.28

  anno_list: any = [];
  pages: any = [];
  searchPages: any = [];
  currentPage: number = 1;
  searchTitle: string = "";
  text: any = "";
  anno_content: string = "";
  anno_link: string = "";
  anno_ref: string = ""
  count: number = 0;
  hidden = 'none'
  block = 'block'

  ngOnInit(): void {
    this.http.get<any>(`http://${this.server}:3000/board/anno/page`).subscribe(data => {
      this.pages = data
    })

    this.http.get<any>(`http://${this.server}:3000/board/anno/listanno?page=1&pageSize=10`).subscribe(data => {
      this.anno_list = data
    })
  }

  setPage(page: number) {
    this.http.get<any>(`http://${this.server}:3000/board/anno/listanno?page=${page}&pageSize=10`).subscribe(data => {
      this.anno_list = data
    })
  }

  setSearchPage(page: number) {
    this.http.get<any>(`http://${this.server}:3000/board/anno/searchanno?title=${this.searchTitle}&page=${page}&pageSize=10`).subscribe(data => {
      this.anno_list = data
      this.anno_content = data.anno_contents
    })
  }

  getContents(id: number, index: number) {
    const table = (<HTMLTableElement>document.getElementById('list'));
    const totalRow = table.rows.length

    if (totalRow > this.anno_list.length + 1) {
      if (this.count != index + 2) {
        this.closeContents(this.count);
        const newRow = table.insertRow(index + 2)
        const newCell = newRow.insertCell(0)
        newCell.colSpan = 3;

        this.http.get<any>(`http://${this.server}:3000/board/anno/openanno/${id}`).subscribe(data => {
          this.anno_content = `<div style=\"float: left;\"> 출처 : ${data[0].anno_ref} </div><div style=\"float: right; margin-top: -3px;\"><a href=\"${data[0].anno_link}\" target=\"_blank\"><button style=\"border: 1px solid black; height: 30px; background-color: white;\">출처 링크 바로가기</button></a><button style=\"border: 1px solid black; height: 30px; background-color: white; margin-left: 30px;\">즐겨찾기</button></div><hr style=\"margin-top: 40px\">` + data[0].anno_contents
          newCell.innerHTML = this.anno_content;
          this.count = index + 2
        })
      } else {
        this.closeContents(this.count);
      }

    } else {
      const newRow = table.insertRow(index + 2)
      const newCell = newRow.insertCell(0)
      newCell.colSpan = 3;

      this.http.get<any>(`http://${this.server}:3000/board/anno/openanno/${id}`).subscribe(data => {
        this.anno_content = `<div style=\"float: left;\"> 출처 : ${data[0].anno_ref} </div><div style=\"float: right; margin-top: -3px;\"><a href=\"${data[0].anno_link}\" target=\"_blank\"><button style=\"border: 1px solid black; height: 30px; background-color: white;\">출처 링크 바로가기</button></a><button style=\"border: 1px solid black; height: 30px; background-color: white; margin-left: 30px;\">즐겨찾기</button></div><hr style=\"margin-top: 40px\">` + data[0].anno_contents
        newCell.innerHTML = this.anno_content;
        this.count = index + 2
      })
    }
  }

  closeContents(index: number) {
    const table = (<HTMLTableElement>document.getElementById('list'));
    const deleteRow = table.deleteRow(index);
  }

  getSearch() {
    this.text = (<HTMLInputElement>document.getElementById('autocomplete-input')).value;
    this.search(this.text)
  }

  search(searchText: string) {
    this.http.get<any>(`http://${this.server}:3000/board/anno/searchanno?title=${searchText}&page=1&pageSize=10`).subscribe(data => {
      this.anno_list = data
    })

    this.http.get<any>(`http://${this.server}:3000/board/anno/search/page?title=${searchText}`).subscribe(data => {
      this.searchPages = data
    })
    this.searchTitle = searchText

    if (searchText === "") {
      alert("검색어를 입력해주세요!")
    }
  }
}
