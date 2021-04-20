import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaBoardComponent } from './idea-board/idea-board.component';
import { MainBodyComponent } from './main-board/main-body.component';

const routes: Routes = [
  { path: "", component: MainBodyComponent },
  { path: 'main-board', component: MainBodyComponent },
  { path: 'idea-board', component: IdeaBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
