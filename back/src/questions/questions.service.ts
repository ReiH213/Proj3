import { Injectable } from '@nestjs/common';
import { Question } from './questions.entity';

@Injectable()
export class QuestionsService {


     async getQuestions(){
        return await Question.findAndCount()

     }

     async getQuestion(index:number){
        return await Question.findOne({where:{id:index}})
     }
}
