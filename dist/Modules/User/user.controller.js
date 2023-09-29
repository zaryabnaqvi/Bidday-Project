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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const user_service_1 = require("./Services/user.service");
const UsersByRole_dto_1 = require("./DTO/UsersByRole.dto");
const UpdateUser_dto_1 = require("./DTO/UpdateUser.dto");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async fetchUsers() {
        const result = await this.userService.fetchUsers();
        return result;
    }
    async fetchUserById(id) {
        const result = await this.userService.fetchUserById(id);
        return result;
    }
    async fetchUsersByRole(roleBody) {
        const result = await this.userService.fetchUsersByRole(roleBody);
        return result;
    }
    async updateUser(userId, userBody) {
        if (Object.keys(userBody).length === 0) {
            throw new common_1.HttpException('Empty Body request is not allowed', common_1.HttpStatus.BAD_REQUEST);
        }
        console.log(userId);
        const result = await this.userService.updateUser(userId, userBody);
        return result;
    }
    async deleteUser(userId) {
        console.log(userId);
        const result = await this.userService.deleteUser(userId);
        return result;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "fetchUsers", null);
__decorate([
    (0, common_1.Get)(':userId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "fetchUserById", null);
__decorate([
    (0, common_1.Post)('byRole'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsersByRole_dto_1.usersByRoleDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "fetchUsersByRole", null);
__decorate([
    (0, common_1.Patch)('update/:userId'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateUser_dto_1.updateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('delete/:userId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_2.Controller)('users'),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map