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
        createdUser: any;
    }>;
    login(UserDTO: userLoginDTO): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        token: string;
        user: any;
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
