import { Controller, Get, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './questions.entity';

@Controller('questions')
export class QuestionsController {
    constructor(private questionService:QuestionsService){}


    @Get('/')
    async getQuestions():Promise<[Question[],number]>{
        return await this.questionService.getQuestions()
    }

    @Get('/:id')
    async getQuestion(@Param('id') id:number):Promise<Question>{
        return await this.questionService.getQuestion(id)
    }
}
