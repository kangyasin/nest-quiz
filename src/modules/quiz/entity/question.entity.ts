import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Quiz } from "./quiz.entity";

@Entity('questions')

export class Question extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'varchar'
  })


  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

}
