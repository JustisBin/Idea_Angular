import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaBoardComponent } from './idea-board/idea-board.component';
import { MainBodyComponent } from './main-board/main-body.component';
import { AnnoBoardComponent } from './anno-board/anno-board.component';
import { CsBoardComponent } from './cs-board/cs-board.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { LoginComponent } from './login/login.component';
import { ContactBoardComponent } from './contact-board/contact-board.component';
import { InsertIdeaComponent } from './insert-idea/insert-idea.component';
import { InsertCsComponent } from './insert-cs/insert-cs.component';
import { AgreeServiceComponent } from './agree-service/agree-service.component';

const routes: Routes = [
  { path: "", component: MainBodyComponent },
  { path: 'main-board', component: MainBodyComponent },
  { path: 'idea-board', component: IdeaBoardComponent },
  { path: 'anno-board', component: AnnoBoardComponent },
  { path: 'notice-board', component: NoticeBoardComponent },
  { path: 'cs-board', component: CsBoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact-board', component: ContactBoardComponent },
  { path: 'insert-idea', component: InsertIdeaComponent },
  { path: 'insert-cs', component: InsertCsComponent },
  { path: 'agree-service', component: AgreeServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
