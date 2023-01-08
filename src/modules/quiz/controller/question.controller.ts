import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question";
import { Question } from "../entity/question.entity";
import { QuestionService } from "../service/question.service";

@Controller('question')

export class QuestionController {
  constructor(private questionService: QuestionService){}
  @Post('')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    return await this.questionService.createQuestioSn(question);
  }
}
