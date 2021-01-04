import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { EnumToArrayPipe } from './enum-to-array.pipe';

@NgModule({
  declarations: [AppComponent, SurveyCreatorComponent, QuestionComponent, EnumToArrayPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
