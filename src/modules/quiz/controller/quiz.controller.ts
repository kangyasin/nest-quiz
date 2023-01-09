import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from '../dto/create-quiz';
import { QuizService } from '../service/quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService){}

  @Get()
  getAllQuiz(){
    return this.quizService.getAllQuiz();
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto)
  {
    return await this.quizService.createNewQuiz(quizData);
  }
}
