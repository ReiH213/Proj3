"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const account_service_1 = require("../account/account.service");
let UserService = class UserService {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async register(reqBody) {
        const user = new user_entity_1.User();
        const new_account = await this.accountService.createAccount(reqBody);
        user.username = reqBody.username;
        user.email = reqBody.email;
        user.password = reqBody.password;
        user.account = new_account;
        return await user.save();
    }
    async getUserByEmail(email) {
        return await user_entity_1.User.findOneOrFail({ where: { email }, relations: { account: true } });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], UserService);
//# sourceMappingURL=user.service.js.map