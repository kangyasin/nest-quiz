import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('questions')

export class Question extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'varchar'
  })

  question: string;
}
