import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { EnumToArrayPipe } from './enum-to-array.pipe';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [AppComponent, SurveyCreatorComponent, QuestionComponent, EnumToArrayPipe, DashboardComponent, NotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
