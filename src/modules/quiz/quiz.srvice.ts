import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { QuizRepository } from "./quiz.repository";

@Injectable()
export class QuizService{

  constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository)
  {

  }


  getAllQuiz()
  {
    return [1,2,3,4,5,6,7];
  }

  async ceraeNewQuiz(quiz: CreateQuizDto)
  {
    return await this.quizRepository.save(quiz);
  }

}
