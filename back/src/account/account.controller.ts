import { Body, Controller, Get, Param, Post, Put, Req, UseGuards, UsePipes } from "@nestjs/common";
import { AccountService } from "./account.service";
import { SETTINGS } from "utils/utils";
import { Account } from "./account.entity";
import { createAccountDto, updateAccountDto } from "src/dtos/account.dto";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";


@Controller('account')
export class AccountController{
    constructor(private accountService:AccountService){}

    @Post('/create')
    @UsePipes(SETTINGS.VALIDATION_PIPE)
    async createAccount(@Body() reqBody:createAccountDto):Promise<Account>{
        return await this.accountService.createAccount(reqBody)
    }
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getAccount(@Param('id') id:string ):Promise<Account>{
        return await this.accountService.getAccountById(id)
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') id: string, @Body() reqBody: updateAccountDto) {
    return this.accountService.update(id, reqBody);
  }
}