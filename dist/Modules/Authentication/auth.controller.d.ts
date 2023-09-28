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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AuthService } from './Services/auth.service';
import { createUserDTO } from '../User/DTO/CreateUser.dto';
import { userLoginDTO } from './DTO/UserLogin.dto';
import { resetPasswordDTO } from './DTO/ResetPass.dto';
import { verifyOtpDTO } from './DTO/VerifyOtp.dto';
import { newPassDTO } from './DTO/NewPass.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(CreateUserDto: createUserDTO): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        createdUser: import("mongoose").Document<unknown, {}, import("../User/schema/user.schema").Users> & import("../User/schema/user.schema").Users & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    login(UserDTO: userLoginDTO): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        token: string;
        user: import("mongoose").Document<unknown, {}, import("../User/schema/user.schema").Users> & import("../User/schema/user.schema").Users & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    reqResetPass(reqBody: resetPasswordDTO): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    verifyOtp(reqBody: verifyOtpDTO): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        token: string;
    }>;
    resetPass(reqBody: newPassDTO): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    hiddeninfo(req: any): string;
}
