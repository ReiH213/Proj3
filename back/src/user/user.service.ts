import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { AccountService } from "src/account/account.service";
import { CreateUserDto } from "src/dtos/user.dto";


@Injectable()

export class UserService{
    constructor(private accountService:AccountService){}

    async register(reqBody:CreateUserDto):Promise<User>{
        const user = new User()
        const new_account = await  this.accountService.createAccount(reqBody)

        user.username = reqBody.username
        user.email=reqBody.email
        user.password=reqBody.password
        user.account = new_account
        return await user.save()
    }

    async getUserByEmail(email:string):Promise<User>{
        return await User.findOneOrFail({where:{email},relations:{account:true}})
    
    }
}