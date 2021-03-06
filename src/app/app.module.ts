import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-board/main-body.component';
import { IdeaBoardComponent } from './idea-board/idea-board.component';
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
@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    IdeaBoardComponent,
    AnnoBoardComponent,
    CsBoardComponent,
    NoticeBoardComponent,
    LoginComponent,
    ContactBoardComponent,
    InsertIdeaComponent,
    InsertCsComponent,
    AgreeServiceComponent,
    SignupMemberComponent,
    FindPwComponent,
    ResetPwComponent,
    CheckPwComponent,
    UpdateMemberComponent,
    PointComponent,
    UsePointComponent,
    SavePointComponent,
    IdeaMypageComponent,
    InterAnnoComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CKEditorModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
