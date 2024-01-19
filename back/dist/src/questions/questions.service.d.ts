import { Question } from './questions.entity';
export declare class QuestionsService {
    getQuestions(): Promise<[Question[], number]>;
    getQuestion(index: number): Promise<Question>;
}
