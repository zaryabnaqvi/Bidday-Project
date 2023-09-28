"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./Services/auth.service");
const auth_controller_1 = require("./auth.controller");
const user_module_1 = require("../User/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const otp_schema_1 = require("./Schema/otp.schema");
const user_schema_1 = require("../User/schema/user.schema");
const jwt_1 = require("@nestjs/jwt");
const jwtStrategy_1 = require("../../Utilities/Jwt/jwtStrategy");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_schema_1.Users.name,
                    schema: user_schema_1.UsersSchema
                },
                {
                    name: otp_schema_1.Otp.name,
                    schema: otp_schema_1.OtpSchema
                }
            ]),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: configService.get('JWT_SECRET_EXPIRY') },
                })
            }),
            user_module_1.UserModule,
        ],
        providers: [auth_service_1.AuthService, jwtStrategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map