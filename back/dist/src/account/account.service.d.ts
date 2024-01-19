import { Account } from "./account.entity";
import { createAccountDto, updateAccountDto } from "src/dtos/account.dto";
export declare class AccountService {
    createAccount(reqBody: createAccountDto): Promise<Account>;
    getAccountById(id: string): Promise<Account>;
    update(id: string, updateAccountDto: updateAccountDto): Promise<Account>;
}
