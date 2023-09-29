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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./Services/auth.service");
const CreateUser_dto_1 = require("../User/DTO/CreateUser.dto");
const UserLogin_dto_1 = require("./DTO/UserLogin.dto");
const ResetPass_dto_1 = require("./DTO/ResetPass.dto");
const VerifyOtp_dto_1 = require("./DTO/VerifyOtp.dto");
const NewPass_dto_1 = require("./DTO/NewPass.dto");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(CreateUserDto) {
        const result = await this.authService.createUser(CreateUserDto);
        return result;
    }
    async login(UserDTO) {
        const result = await this.authService.userLogin(UserDTO);
        return result;
    }
    async reqResetPass(reqBody) {
        const result = await this.authService.requestResetPassword(reqBody);
        return result;
    }
    async verifyOtp(reqBody) {
        const result = await this.authService.verifyOtp(reqBody);
        return result;
    }
    async resetPass(reqBody) {
        const result = await this.authService.resetPass(reqBody);
        return result;
    }
    hiddeninfo(req) {
        console.log(req.user);
        const result = "secrets" + JSON.stringify(req.user);
        return result;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.createUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserLogin_dto_1.userLoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('requestResetPassword'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResetPass_dto_1.resetPasswordDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "reqResetPass", null);
__decorate([
    (0, common_1.Post)('verifyOtp'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyOtp_dto_1.verifyOtpDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Post)('resetPassword'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewPass_dto_1.newPassDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPass", null);
__decorate([
    (0, common_1.Post)('/hiddenmessage'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AuthController.prototype, "hiddeninfo", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map