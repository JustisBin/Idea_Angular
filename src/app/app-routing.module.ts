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
import { IdeaMypageComponent } from './idea-mypage/idea-mypage.component';
import { InterAnnoComponent } from './inter-anno/inter-anno.component';



const routes: Routes = [
  { path: "", component: MainBodyComponent },
  { path: 'main-board', component: MainBodyComponent, data: { animation: 'a' } },
  { path: 'idea-board', component: IdeaBoardComponent, data: { animation: 'b' } },
  { path: 'anno-board', component: AnnoBoardComponent, data: { animation: 'c' } },
  { path: 'notice-board', component: NoticeBoardComponent, data: { animation: 'd' } },
  { path: 'cs-board', component: CsBoardComponent, data: { animation: 'e' } },
  { path: 'login', component: LoginComponent, data: { animation: 'f' } },
  { path: 'contact-board', component: ContactBoardComponent, data: { animation: 'g' } },
  { path: 'insert-idea', component: InsertIdeaComponent, data: { animation: 'h' } },
  { path: 'insert-cs', component: InsertCsComponent, data: { animation: 'i' } },
  { path: 'agree-service', component: AgreeServiceComponent, data: { animation: 'j' } },
  { path: 'signup-member', component: SignupMemberComponent, data: { animation: 'k' } },
  { path: 'find-pw', component: FindPwComponent, data: { animation: 'l' } },
  { path: 'reset-pw', component: ResetPwComponent, data: { animation: 'm' } },
  { path: 'check-pw', component: CheckPwComponent, data: { animation: 'n' } },
  { path: 'update-member', component: UpdateMemberComponent, data: { animation: 'o' } },
  { path: 'point', component: PointComponent, data: { animation: 'p' } },
  { path: 'use-point', component: UsePointComponent, data: { animation: 'q' } },
  { path: 'save-point', component: SavePointComponent, data: { animation: 'r' } },
  { path: 'idea-mypage', component: IdeaMypageComponent, data: { animation: 's' } },
  { path: 'inter-anno', component: InterAnnoComponent, data: { animation: 't' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    enableTracing: false,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
