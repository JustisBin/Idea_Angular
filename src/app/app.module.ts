import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
