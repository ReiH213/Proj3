"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const account_entity_1 = require("./account.entity");
let AccountService = class AccountService {
    async createAccount(reqBody) {
        const account = new account_entity_1.Account();
        account.username = reqBody.username;
        account.character = reqBody.character;
        return await account.save();
    }
    async getAccountById(id) {
        const account = await account_entity_1.Account.findOneOrFail({ where: { id } });
        return account;
    }
    async update(id, reqBody) {
        const account = await account_entity_1.Account.findOne({ where: { id } });
        if (reqBody.progress) {
            account.progress = reqBody.progress;
        }
        if (reqBody.xp_points) {
            account.xp_points = account.xp_points + reqBody.xp_points;
            account.level = this.calculateLevel(account.xp_points);
        }
        return await account.save();
    }
    calculateLevel(xp_points) {
        let level = 1;
        let requiredXP = 1000;
        while (xp_points >= requiredXP) {
            xp_points -= requiredXP;
            level++;
            requiredXP *= 1.10;
        }
        return level;
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)()
], AccountService);
//# sourceMappingURL=account.service.js.map