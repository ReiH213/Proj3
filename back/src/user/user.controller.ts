import { Body, Controller, Get, Param, Post, Req, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { SETTINGS } from "utils/utils";

import { User } from "./user.entity";
import { CreateUserDto } from "src/dtos/user.dto";


@Controller('user')
export class UserController{
    constructor(private userService:UserService){}

    @Post('/register')
    @UsePipes(SETTINGS.VALIDATION_PIPE)
    async registerUser(@Body() reqBody:CreateUserDto):Promise<User>{
        return await this.userService.register(reqBody)
    }

    @Get(':email')
    async getUser(@Param('email') email:string):Promise<User>{
        return await this.userService.getUserByEmail(email)
    }
}