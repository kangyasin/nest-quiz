import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/create-quiz";
import { Quiz } from "../entity/quiz.entity";
import { QuizRepository } from "../repository/quiz.repository";

@Injectable()
export class QuizService{

  constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository)
  {

  }


  getAllQuiz()
  {
    return [1,2,3,4,5,6,7];
  }

  async getQuizById(id: number): Promise<Quiz>
  {
    return await this.quizRepository.findOne(id);
  }

  async createNewQuiz(quiz: CreateQuizDto)
  {
    return await this.quizRepository.save(quiz);
  }


}
