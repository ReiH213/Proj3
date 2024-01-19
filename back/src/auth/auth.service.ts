import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt'
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{

    constructor(
        private userService:UserService,
        private jwtService:JwtService
    ){}

    async validate(email:string,password:string):Promise<User>{
        const user = await this.userService.getUserByEmail(email)
        if(!user){
            throw new BadRequestException()
        }
        if(!await bcrypt.compare(password,user.password)){
            throw new UnauthorizedException()
        }
        return user
    }

    async login(user:any){
        const new_user = await this.userService.getUserByEmail(user.email)
        console.log(new_user);
        
        const payload = {username:new_user.username,sub:user.account.id,email:new_user.email}
        return {
            access_token:this.jwtService.sign(payload)
        }
    }
}