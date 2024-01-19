import { BaseEntity } from "typeorm";
import { Account } from "src/account/account.entity";
export declare class User extends BaseEntity {
    id: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    setPassword(password: string): Promise<void>;
    account: Account;
}
