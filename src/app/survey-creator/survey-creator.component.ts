import { Component, OnInit } from '@angular/core';
import { QuestionType, Survey } from '../../models/survey';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.scss'],
})
export class SurveyCreatorComponent implements OnInit {
  survey: Survey = {
    Title: '',
    Pages: [
      {
        Title: 'First Page',
        Questions: [
          {
            Type: QuestionType.Text,
            Question: 'ochujtuchodzi',
            Choices: []
          },
          {
            Type: QuestionType.Multiple,
            Question: 'A or B',
            Choices: ['AAAA', 'BBBB']
          }
        ],
      },
    ],
  };
  currentIndex: number = 0;
  
  constructor(private http: HttpClient) { }
  ngOnInit(): void { }

  DeleteQuestion(index: number) {
    this.survey.Pages[this.currentIndex].Questions.splice(index, 1);
  }
  AddQuestion() {
    this.survey.Pages[this.currentIndex].Questions.push({ Type: QuestionType.Text, Question: '', Choices: [] })
  }
  AddPage() {
    this.survey.Pages.push({ Title: '', Questions: [{ Type: QuestionType.Text, Question: '', Choices: [] }] });
  }
  ChangePage(index: number) {
    if (index < this.survey.Pages.length && index >= 0) {
      this.currentIndex = index;
    }
  }
  RemovePage() {
    if (this.survey.Pages.length > 1) {
      this.survey.Pages.splice(this.currentIndex, 1);
    }
  }
  SaveSurvey() {
    this.http.post('/api/survey', this.survey).subscribe();
  }
}
