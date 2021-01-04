export interface Survey {
  Title: string;
  Pages: Array<Page>;
}
export interface Page {
  Title: string;
  Questions: Array<Question>;
}
export interface Question {
  Type: QuestionType;
  Question: string;
  Choices: Array<string>;
}
export enum QuestionType {
  Text,
  Single,
  Multiple,
}
