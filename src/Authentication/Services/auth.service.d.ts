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
        createdUser: any;
    }>;
    userLogin(authDTO: userLoginDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        token: string;
        user: any;
    }>;
    validateUser(authDTO: userLoginDTO): Promise<any>;
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
    validate(payload: payload): Promise<any>;
}
