import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {
  @IsNotEmpty({message : 'The quiz should have a question'})
  @Length(3, 255)
  question: string;
}
