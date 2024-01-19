import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
  } from 'typeorm';
  
  @Entity('questions')
  export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    question: string;
  
    @Column()
    a:number;
    @Column()
    b:number;
    @Column()
    c:number;
    @Column()
    d:number;
  
    @Column()
    correct: string;
  }
  