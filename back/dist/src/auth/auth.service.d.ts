import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validate(email: string, password: string): Promise<User>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
