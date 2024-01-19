import { Injectable } from "@nestjs/common";
import { Account } from "./account.entity";
import { createAccountDto, updateAccountDto } from "src/dtos/account.dto";


@Injectable()
export class AccountService{
    async createAccount(reqBody:createAccountDto):Promise<Account>{
        const account = new Account()
        account.username = reqBody.username
        account.character = reqBody.character
        return await account.save()
    }

    async getAccountById(id:string):Promise<Account>{
        const account = await Account.findOneOrFail({where:{id}})
        return account
    }

    async update(id: string, updateAccountDto: updateAccountDto): Promise<Account> {
        const account = await Account.findOne({where:{id}});
        if (updateAccountDto.level) {
          account.level = updateAccountDto.level;
        }
        if (updateAccountDto.progress) {
          account.progress = updateAccountDto.progress;
        }
        if (updateAccountDto.xp_points) {
          account.xp_points = updateAccountDto.xp_points;
        }
        return await account.save();
      }
    
}