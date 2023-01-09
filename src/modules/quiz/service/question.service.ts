import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "../dto/create-question";
import { Question } from "../entity/question.entity";
import { Quiz } from "../entity/quiz.entity";
import { QuestionRepository } from "../repository/question.repository";

@Injectable()
export class QuestionService{

  constructor
  (@InjectRepository(QuestionRepository)
  private questionRepository: QuestionRepository
  ) {}


  async createQuestioSn(
    question: CreateQuestionDto,
    quiz: Quiz,
    ): Promise<Question> {
      const newQuestion = await this.questionRepository.save({
        question: question.question,
      });
    quiz.questions = [newQuestion, ...quiz.questions];
    await quiz.save();
    return newQuestion;
  }



}
