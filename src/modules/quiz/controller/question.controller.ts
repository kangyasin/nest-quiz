import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question";
import { Question } from "../entity/question.entity";
import { QuestionService } from "../service/question.service";
import { QuizService } from "../service/quiz.service";

@Controller('question')

export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
    ){}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createQuestioSn(question, quiz);
  }
}
