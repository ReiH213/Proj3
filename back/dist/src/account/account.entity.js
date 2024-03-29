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
exports.Account = void 0;
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let Account = class Account extends typeorm_1.BaseEntity {
};
exports.Account = Account;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Account.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Account.prototype, "character", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0
    }),
    __metadata("design:type", Number)
], Account.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0
    }),
    __metadata("design:type", Number)
], Account.prototype, "progress", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0
    }),
    __metadata("design:type", Number)
], Account.prototype, "xp_points", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.account),
    __metadata("design:type", user_entity_1.User)
], Account.prototype, "user", void 0);
exports.Account = Account = __decorate([
    (0, typeorm_1.Entity)({ name: 'accounts' })
], Account);
//# sourceMappingURL=account.entity.js.map