import { Component, OnInit } from '@angular/core';
import { QuestionType, Survey } from '../../models/survey';

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
            Questions: ['o chuj tu chodzi'],
          },
          {
            Type: QuestionType.Multiple,
            Questions: ['AAAA','BBBB']
          }
        ],
      },
    ],
  };
  currentIndex: number = 0;
  constructor() {}
  ngOnInit(): void {}
  test() {
    console.log(this.survey);
  }
}
