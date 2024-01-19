import { AccountService } from "./account.service";
import { Account } from "./account.entity";
import { createAccountDto, updateAccountDto } from "src/dtos/account.dto";
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    createAccount(reqBody: createAccountDto): Promise<Account>;
    getAccount(id: string): Promise<Account>;
    update(id: string, updateAccountDto: updateAccountDto): Promise<Account>;
}
