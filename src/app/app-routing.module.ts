import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyCreatorComponent } from "./survey-creator/survey-creator.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { NotfoundComponent } from './notfound/notfound.component'

const routes: Routes = [{ path: 'creator', component: SurveyCreatorComponent }, { path: 'dashboard', component: DashboardComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
