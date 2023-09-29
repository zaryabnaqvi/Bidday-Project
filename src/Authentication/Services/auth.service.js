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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_service_1 = require("src/Modules/User/Services/user.service");
const otpGenerator_1 = require("../../../Utilities/OTP/otpGenerator");
const sendEmail_1 = require("../../Utilities/Email/sendEmail");
const moment = require("moment");
const bcrypt_1 = require("../../Utilities/Hashing/bcrypt");
const bcrypt_2 = require("../../Utilities/Hashing/bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_schema_1 = require("src/Modules/User/schema/user.schema");
const otp_schema_1 = require("../Schema/otp.schema");
const emailConstants_1 = require("../../Utilities/Template/emailConstants");
let AuthService = class AuthService {
    constructor(jwtService, userService, userModel, OtpModel) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.userModel = userModel;
        this.OtpModel = OtpModel;
    }
    async createUser(createUserDTO) {
        try {
            const { email } = createUserDTO;
            const isUserExist = await this.userModel.findOne({ email });
            if (isUserExist) {
                throw new common_2.HttpException('User with this email is already exist', common_2.HttpStatus.BAD_REQUEST);
            }
            createUserDTO.password = (0, bcrypt_2.encodePassword)(createUserDTO.password);
            const userBody = createUserDTO;
            const newUser = new this.userModel(userBody);
            const createdUser = await newUser.save();
            return {
                statusCode: common_2.HttpStatus.OK,
                message: 'User Registered Sucessfully. Redirecting to Login Page',
                createdUser
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async userLogin(authDTO) {
        try {
            const user = await this.validateUser(authDTO);
            const payload = {
                id: user.id,
                email: user.email,
                role: user.role,
            };
            const token = await this.generateToken(payload);
            return {
                statusCode: common_2.HttpStatus.OK,
                message: 'Login Succussfully',
                token,
                user
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async validateUser(authDTO) {
        try {
            const user = await this.userModel.findOne({ email: authDTO.email });
            if (!user) {
                throw new common_2.HttpException('User with this email not found', common_2.HttpStatus.NOT_FOUND);
            }
            const isCorrectPass = (0, bcrypt_1.comparePassword)(authDTO.password, user.password);
            if (!isCorrectPass) {
                throw new common_2.HttpException('Invalid Password', common_2.HttpStatus.NOT_ACCEPTABLE);
            }
            return user;
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async generateToken(IAuthPaylaod) {
        try {
            const token = this.jwtService.sign({ email: IAuthPaylaod.email });
            return token;
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async requestResetPassword(resetPasswordDTO) {
        try {
            let otpCode;
            let currTime = new Date();
            let expiryTime = moment().add(15, 'minutes').format();
            const isUserExist = await this.userModel.findOne({
                email: resetPasswordDTO.email
            });
            if (!isUserExist) {
                throw new common_2.HttpException('User not found with this email.', common_2.HttpStatus.NOT_FOUND);
            }
            const otpAlreadyExist = await this.OtpModel.findOne({
                email: resetPasswordDTO.email
            });
            if (otpAlreadyExist) {
                if (otpAlreadyExist.expiry > currTime) {
                    otpCode = otpAlreadyExist.code;
                }
                else {
                    otpCode = (0, otpGenerator_1.generateOtpCode)(4);
                }
            }
            else {
                otpCode = (0, otpGenerator_1.generateOtpCode)(4);
            }
            var mailOptions = {
                from: emailConstants_1.fromEmail,
                to: isUserExist.email,
                subject: 'OTP CHANGED',
                html: `<h1>Your code is ${otpCode}</h1>`
            };
            sendEmail_1.transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    console.log('Error transporter email', error);
                }
                else {
                    const insertForgotPassData = {
                        email: isUserExist.email,
                        code: otpCode,
                        expiry: expiryTime
                    };
                    const insertedRes = new this.OtpModel(insertForgotPassData);
                    const getInsertedRes = await insertedRes.save();
                    console.log(getInsertedRes);
                }
            });
            return {
                statusCode: common_2.HttpStatus.OK,
                message: 'Otp has been sent to your email successfully!',
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async verifyOtp(otpCode) {
        try {
            let currTime = new Date();
            const isCodeVerified = await this.OtpModel.findOne({ code: otpCode.code });
            if (!isCodeVerified) {
                throw new common_2.HttpException('Invalid OTP code', common_2.HttpStatus.NOT_FOUND);
            }
            if (currTime > isCodeVerified.expiry) {
                await this.OtpModel.deleteOne({ _id: isCodeVerified._id });
                throw new common_2.HttpException('OTP code expired. Please generate new!', common_2.HttpStatus.NOT_FOUND);
            }
            const token = this.jwtService.sign({
                email: isCodeVerified.email
            });
            return {
                statusCode: common_2.HttpStatus.OK,
                message: 'Proceed further',
                token
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async resetPass(newPass) {
        try {
            const decodedToken = await this.jwtService.verifyAsync(newPass.token);
            const otp = await this.OtpModel.findOne({
                email: decodedToken.email
            });
            if (!otp) {
                throw new common_2.HttpException('Bad Request', common_2.HttpStatus.NOT_FOUND);
            }
            const user = await this.userModel.findOne({
                email: decodedToken.email
            });
            const isSameNewPass = (0, bcrypt_1.comparePassword)(newPass.password, user.password);
            if (isSameNewPass) {
                throw new common_2.HttpException('Cannot set this password', common_2.HttpStatus.NOT_ACCEPTABLE);
            }
            const decodedPass = (0, bcrypt_2.encodePassword)(newPass.password);
            user.password = decodedPass;
            const updatedUser = new this.userModel(user);
            await updatedUser.save();
            await this.OtpModel.deleteOne({ email: decodedToken.email });
            return {
                statusCode: common_2.HttpStatus.OK,
                message: 'Password has been changed successfully. Redirecting to Login Page'
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async validate(payload) {
        try {
            const user = await this.userModel.findOne({ email: payload.email });
            if (!user) {
                throw new common_2.HttpException('User with this email not found', common_2.HttpStatus.NOT_FOUND);
            }
            return user;
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.Users.name)),
    __param(3, (0, mongoose_1.InjectModel)(otp_schema_1.Otp.name)),
    __metadata("design:paramtypes", [jwt_1.JwtService, typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, mongoose_2.Model,
        mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map