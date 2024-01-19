import { User } from "./user.entity";
import { AccountService } from "src/account/account.service";
import { CreateUserDto } from "src/dtos/user.dto";
export declare class UserService {
    private accountService;
    constructor(accountService: AccountService);
    register(reqBody: CreateUserDto): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
}
