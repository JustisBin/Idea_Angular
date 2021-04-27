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
import { SignupMemberComponent } from './signup-member/signup-member.component';
import { FindPwComponent } from './find-pw/find-pw.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import { CheckPwComponent } from './check-pw/check-pw.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { PointComponent } from './point/point.component';
import { UsePointComponent } from './use-point/use-point.component';
import { SavePointComponent } from './save-point/save-point.component';


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
  { path: 'signup-member', component: SignupMemberComponent },
  { path: 'find-pw', component: FindPwComponent },
  { path: 'reset-pw', component: ResetPwComponent },
  { path: 'check-pw', component: CheckPwComponent },
  { path: 'update-member', component: UpdateMemberComponent },
  { path: 'point', component: PointComponent },
  { path: 'use-point', component: UsePointComponent },
  { path: 'save-point', component: SavePointComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
