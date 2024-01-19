import { User } from "src/user/user.entity";
import { BaseEntity } from "typeorm";
export declare class Account extends BaseEntity {
    id: string;
    username: string;
    character: string;
    level: number;
    progress: number;
    xp_points: number;
    user: User;
}
