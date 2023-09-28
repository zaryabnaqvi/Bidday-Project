/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserService } from 'src/Modules/User/Services/user.service';
import { payload } from '../DTO/payload.dto';
import { resetPasswordDTO } from '../DTO/ResetPass.dto';
import { userLoginDTO } from '../DTO/UserLogin.dto';
import { verifyOtpDTO } from '../DTO/VerifyOtp.dto';
import { createUserDTO } from 'src/Modules/User/DTO/CreateUser.dto';
import { newPassDTO } from '../DTO/NewPass.dto';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/Modules/User/schema/user.schema';
import { Otp } from '../Schema/otp.schema';
import { IPaylaod } from '../Interfaces/IPayload.interface';
export declare class AuthService {
    private jwtService;
    private userService;
    private readonly userModel;
    private OtpModel;
    constructor(jwtService: JwtService, userService: UserService, userModel: Model<Users>, OtpModel: Model<Otp>);
    createUser(createUserDTO: createUserDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        createdUser: import("mongoose").Document<unknown, {}, Users> & Users & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    userLogin(authDTO: userLoginDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        token: string;
        user: import("mongoose").Document<unknown, {}, Users> & Users & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    validateUser(authDTO: userLoginDTO): Promise<import("mongoose").Document<unknown, {}, Users> & Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    generateToken(IAuthPaylaod: IPaylaod): Promise<string>;
    requestResetPassword(resetPasswordDTO: resetPasswordDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    verifyOtp(otpCode: verifyOtpDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        token: string;
    }>;
    resetPass(newPass: newPassDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    validate(payload: payload): Promise<import("mongoose").Document<unknown, {}, Users> & Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
