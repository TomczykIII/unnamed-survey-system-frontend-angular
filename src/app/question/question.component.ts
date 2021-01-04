import {
  Component,
  Input,
  OnChanges,
  OnInit,
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
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  AddQuestion() {
    this.question.Questions.push("");
  }
  DeleteQuestion(index: number) {
    this.question.Questions.splice(index, 1);
  }
  ChangeType(value: string) {
    this.question.Type =this.mapValueToEnum(+value);
    this.question.Questions = [''];
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  //refactor this
  mapValueToEnum(value: number): QuestionType {
    switch (value) {
      case 2:
        {
          return QuestionType.Multiple
          break;
        }

      case 1:
        {
          return QuestionType.Single
          break;
        }
      case 0:
        {
          return QuestionType.Text
          break;
        }
      default:
        throw new Error(`no enum for value: ${value}`)
        break;
    }
  }
}
