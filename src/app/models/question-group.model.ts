import {Question} from './question.model';

export class QuestionGroup {
    description: string;
    questions: Question[];

    constructor(input: any) {
        if (input.questions) {
            for (let q of input.questions) {
                this.questions.push(new Question(q));
            }
        }
    }
}
