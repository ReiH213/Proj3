import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateUserDto } from "src/dtos/user.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    registerUser(reqBody: CreateUserDto): Promise<User>;
    getUser(email: string): Promise<User>;
}
