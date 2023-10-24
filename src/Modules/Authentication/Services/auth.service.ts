import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import { UserService } from '../../../Modules/User/Services/user.service';
import { payload } from '../DTO/payload.dto';
import { resetPasswordDTO } from '../DTO/ResetPass.dto';
import {generateOtpCode} from '../../../Utilities/OTP/otpGenerator'
import { transporter } from '../../../Utilities/Email/sendEmail';
import * as moment from 'moment';
import { userLoginDTO } from '../DTO/UserLogin.dto';
import { comparePassword } from '../../../Utilities/Hashing/bcrypt';
import { verifyOtpDTO } from '../DTO/VerifyOtp.dto';
import { encodePassword } from '../../../Utilities/Hashing/bcrypt';
import { createUserDTO } from '../../../Modules/User/DTO/CreateUser.dto';
import { newPassDTO } from '../DTO/NewPass.dto';
import { JwtService } from '@nestjs/jwt'
import { Users } from '../../../Modules/User/Schema/user.schema';
import { Otp } from '../Schema/otp.schema';
import { ICreateUser } from '../../../Modules/User/Interfaces/ICreateUser.interface';
import { IAuthPayload } from '../Interfaces/IPayload.interface';
import { fromEmail } from '../../../Utilities/Template/emailConstants';
import { IOtp } from '../Interfaces/IOtp.interface';

@Injectable()
export class AuthService {
  constructor(
    private jwtService : JwtService,
    private userService: UserService,
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
    @InjectModel(Otp.name) private OtpModel: Model<Otp>,
  ) {}

//#region : AUTHENTICATION

    async createUser(createUserDTO: createUserDTO){
        try{
            const { email } = createUserDTO;
            const isUserExist = await this.userModel.findOne({ email });
            if(isUserExist){
                throw new HttpException('User with this email is already exist', HttpStatus.BAD_REQUEST)
            }        
            createUserDTO.password = encodePassword(createUserDTO.password);
            const userBody:ICreateUser = createUserDTO;
            const newUser = new this.userModel(userBody);
            const createdUser = await newUser.save();
            return {
                statusCode: HttpStatus.OK,
                message: 'User Registered Sucessfully. Redirecting to Login Page',
                createdUser
            }
            // const { _id } = createdUser;
            // console.log("Getting the id of the createdUser",createdUser.id);   
            // const payload: IAuthPayload = {
            //     id: _id,
            //     email: createdUser.email,
            //     role: createdUser.role,
            // };          
            // const token = await this.generateToken(payload)
        }catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

    async userLogin(authDTO: userLoginDTO){
        try{
            const user = await this.validateUser(authDTO);
            const payload: IAuthPayload = {
                id: user.id,
                email: user.email,
                role: user.role,
            };
            const token = await this.generateToken(payload);
            return {
                statusCode: HttpStatus.OK,
                message: 'Login Succussfully',
                token,
                user
            }
            
        }catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

//#endregion

//#region : RESET PASSWORD FLOW

    async requestResetPassword(resetPasswordDTO:resetPasswordDTO){
        try{
            let otpCode:any;
            let currTime = new Date();
            let expiryTime = moment().add(15, 'minutes').format();
            const isUserExist = await this.userModel.findOne({ 
                email: resetPasswordDTO.email 
            });
            if(!isUserExist){
                throw new HttpException('User not found with this email.', HttpStatus.NOT_FOUND);
            }
            const otpAlreadyExist = await this.OtpModel.findOne({
                email: resetPasswordDTO.email
            });
            if(otpAlreadyExist){
                if(otpAlreadyExist.expiry > currTime){
                    otpCode = otpAlreadyExist.code;
                } else{
                    otpCode = generateOtpCode(4);
                } 
            } else{
                otpCode = generateOtpCode(4);
            }
            var mailOptions = {
                from: fromEmail,
                to: isUserExist.email,
                subject: 'OTP CHANGED', 
                html: `<h1>Your code is ${otpCode}</h1>`
            };
            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    console.log('Error transporter email', error);
                } else {
                    const insertForgotPassData: IOtp = {
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
                statusCode: HttpStatus.OK,
                message: 'Otp has been sent to your email successfully!',
            };
        } catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

    async verifyOtp(otpCode:verifyOtpDTO) {
        try{
            let currTime = new Date();
            const isCodeVerified = await this.OtpModel.findOne({code: otpCode.code});
            if(!isCodeVerified){
                throw new HttpException('Invalid OTP code', HttpStatus.NOT_FOUND);
            }
            if(currTime > isCodeVerified.expiry){
                await this.OtpModel.deleteOne({ _id: isCodeVerified._id });
                throw new HttpException('OTP code expired. Please generate new!', HttpStatus.NOT_FOUND);
            }
            const token = this.jwtService.sign({
                email: isCodeVerified.email
            });
            return {
                statusCode: HttpStatus.OK,
                message: 'Proceed further',
                token
            }
        }catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

    async resetPass(newPass: newPassDTO){
    try{
        const decodedToken = await this.jwtService.verifyAsync(
            newPass.token
        );
        
        const otp = await this.OtpModel.findOne({ 
            email: decodedToken.email 
        });
        if(!otp){
            throw new HttpException('Bad Request', HttpStatus.NOT_FOUND);
        }
        const user = await this.userModel.findOne({
            email: decodedToken.email 
        });
        const isSameNewPass = comparePassword(newPass.password, user.password);
        if(isSameNewPass){
            throw new HttpException('Cannot set this password', HttpStatus.NOT_ACCEPTABLE);
        }
        const decodedPass = encodePassword(newPass.password);
        user.password = decodedPass;
        const updatedUser = new this.userModel(user);
        await updatedUser.save();
        await this.OtpModel.deleteOne({ email: decodedToken.email  });
        return {
            statusCode: HttpStatus.OK,
            message: 'Password has been changed successfully. Redirecting to Login Page'
        };
    }catch (error) {
        throw new HttpException(
            error.message,
            error.status || HttpStatus.BAD_REQUEST,
        );
    }
    }

//#endregion

//#region : VALIDATION CONSTRAINTS

    async validateUser(authDTO: userLoginDTO) {
        try {
            const user = await this.userModel.findOne({ email: authDTO.email })
            if (!user) {
                throw new HttpException('User with this email not found', HttpStatus.NOT_FOUND);
            }
            const isCorrectPass = comparePassword(authDTO.password, user.password);
            if (!isCorrectPass) {
                throw new HttpException('Invalid Password', HttpStatus.NOT_ACCEPTABLE);
            }
            return user;
        } catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

    async generateToken(IAuthPaylaod: IAuthPayload) {
        try {
            const token = this.jwtService.sign({ email: IAuthPaylaod.email })
            return token;
        } catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

//#endregion

}