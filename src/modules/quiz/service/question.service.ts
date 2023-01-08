import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "../dto/create-question";
import { QuestionRepository } from "../repository/question.repository";

@Injectable()
export class QuestionService{

  constructor(@InjectRepository(QuestionRepository) private questionRepository: QuestionRepository)
  {

  }


  async createQuestioSn(question: CreateQuestionDto){
    return await this.questionRepository.save(question);
  }

}
