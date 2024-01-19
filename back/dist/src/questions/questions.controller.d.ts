import { QuestionsService } from './questions.service';
import { Question } from './questions.entity';
export declare class QuestionsController {
    private questionService;
    constructor(questionService: QuestionsService);
    getQuestions(): Promise<[Question[], number]>;
    getQuestion(id: number): Promise<Question>;
}
