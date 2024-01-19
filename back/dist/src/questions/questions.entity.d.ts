import { BaseEntity } from 'typeorm';
export declare class Question extends BaseEntity {
    id: number;
    question: string;
    a: number;
    b: number;
    c: number;
    d: number;
    correct: string;
}
