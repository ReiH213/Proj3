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

    async update(id: string, reqBody: updateAccountDto): Promise<Account> {
      
        const account = await Account.findOne({where:{id}});

        if (reqBody.progress) {
          account.progress = reqBody.progress;
        }
        if (reqBody.xp_points) {
          account.xp_points =account.xp_points + reqBody.xp_points;
          account.level = this.calculateLevel(account.xp_points);
        }
        return await account.save();
      }
      calculateLevel(xp_points: number): number {
        let level = 1;
        let requiredXP = 1000;
        while (xp_points >= requiredXP) {
          xp_points -= requiredXP;
          level++;
          requiredXP *= 1.10;
        }
        return level;
      }
}