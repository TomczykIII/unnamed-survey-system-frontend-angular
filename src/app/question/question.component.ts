import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Question, QuestionType } from '../../models/survey';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnChanges {
  //https://stackoverflow.com/questions/35835984/how-to-use-a-typescript-enum-value-in-an-angular2-ngswitch-statement
  //hack for using enum in ngSwitch
  questionType = QuestionType;

  @Input() question!: Question;
  @Output() deleteQuestion = new EventEmitter<boolean>();
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  AddChoice() {
    this.question.Choices?.push("");
  }
  DeleteChoice(index: number) {
    this.question.Choices?.splice(index, 1);
  }
  ChangeType(event: Event) {
    let value = (<HTMLSelectElement>event.target).value;
    this.question.Type = +value;
    this.question.Question = '';
    if (this.question.Type === QuestionType.Multiple || this.question.Type === QuestionType.Single) {
      this.question.Choices = [''];
    }
    if (this.question.Type === QuestionType.Text) {
      this.question.Choices = [];
    }
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  DeleteQuestion() {
    this.deleteQuestion.emit(true);
  }

}
