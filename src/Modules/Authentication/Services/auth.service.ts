
import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { otp } from '../Entity/otp.entity';
import { User } from 'src/Modules/User/Entity/user.entity';
import { sign } from 'jsonwebtoken';
import { UserService } from 'src/Modules/User/Services/user.service';
import { payload } from '../DTO/payload.dto';
import { resetPasswordDTO } from '../DTO/ResetPass.dto';
import {generateOtpCode} from '../../../Utilities/OTP/otpGenerator'
import { transporter } from 'src/Utilities/Email/sendEmail';
import * as moment from 'moment';
import { userLoginDTO } from '../DTO/UserLogin.dto';
import { comparePassword } from 'src/Utilities/Hashing/bcrypt';
import { JwtStrategy } from 'src/Utilities/Jwt/jwtStrategy';
import { verifyOtpDTO } from '../DTO/VerifyOtp.dto';
import { encodePassword } from 'src/Utilities/Hashing/bcrypt';
import { createUserDTO } from 'src/Modules/User/DTO/CreateUser.dto';
import { newPassDTO } from '../DTO/NewPass.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
   private jwtService : JwtService,
    @InjectModel('Otp') private OtpModel: Model<otp>,private userService: UserService,
    @InjectModel("User") private UserModel :Model<User>
  ) {}

  async createUser(createUserDTO: createUserDTO){
    try{
        // console.log("createUserDTO",createUserDTO);
        const { email } = createUserDTO;
       

        const isUserExist = await this.UserModel.findOne({ email });
        if(isUserExist){
            throw new HttpException('User with this email is already exist', HttpStatus.BAD_REQUEST)
        }
        
        createUserDTO.password = encodePassword(createUserDTO.password);
        // console.log(createUserDTO.password);
        const reqBody = createUserDTO
      
        // console.log("reqBody",reqBody);
        const userBody:createUserDTO = reqBody;
        const newUser =new this.UserModel(userBody);
        const createdUser = await newUser.save();
        const { _id } = createdUser;
        // console.log("Getting the id of the createdUser",createdUser.id);   
        const payload = {
          id: _id,
          email:userBody.email,
      };          
        const token = await this.generateToken(payload)
        return{
          statusCode:HttpStatus.OK,
          message:'Signup Sucessfully',
          user:this.sanitizeUser(createdUser),
          token

        }
               
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
        const payload = {
            id: user.id,
            email: user.email,
        };
        const token = await this.generateToken(payload);
        return {
            statusCode: HttpStatus.OK,
            message: 'Login Succussfully',
            token,
            user:this.sanitizeUser(user)
        }
    }catch (error) {
        throw new HttpException(
            error.message,
            error.status || HttpStatus.BAD_REQUEST,
        );
    }
}
async validateUser(authDTO: userLoginDTO){
    try{
        const user = await this.UserModel.findOne({email: authDTO.email })
        if(!user){
            throw new HttpException('User with this email not found', HttpStatus.NOT_FOUND);
        }
        const isCorrectPass = comparePassword(authDTO.password,user.password);
        if(!isCorrectPass){
            throw new HttpException('Invalid Password',HttpStatus.NOT_ACCEPTABLE);
        }
        return user;
    }catch (error) {
        throw new HttpException(
            error.message,
            error.status || HttpStatus.BAD_REQUEST,
        );
    }
}
async generateToken(IAuthPaylaod: {id: string ,email:string}){
    try{
        const token = sign({email:IAuthPaylaod.email} ,  "process.env.SECRET_KEY" , { expiresIn: '7d' });
        return token;
    }catch (error) {
        throw new HttpException(
            error.message,
            error.status || HttpStatus.BAD_REQUEST,
        );
    }
}

sanitizeUser(user: User) { 
  const sanitized = user.toObject();
  delete sanitized['password'];
  return sanitized;
}

  
  async signPayload(email: payload ) {
    return sign(email ,  "process.env.SECRET_KEY" , { expiresIn: '7d' });
  }


  async requestResetPassword(resetPasswordDTO:resetPasswordDTO){
    try{
        let otpCode:any;
        let currTime = new Date();
        let expiryTime = moment().add(15, 'minutes').format();
        const isUserExist = await this.UserModel.findOne({ email: resetPasswordDTO.email });
        if(!isUserExist){
            throw new HttpException('User not found with this email.', HttpStatus.NOT_FOUND);
        }
        const otpAlreadyExist = await this.OtpModel.findOne({email: resetPasswordDTO.email})
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
            from: "zaryab.110786@gmail.com",
            to: isUserExist.email,
            subject: 'OTP CHANGED', 
            html: `<h1>Your code is ${otpCode}</h1>`
        };
    
        transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
                console.log('Error transporter email', error);
            } else {
                const insertForgotPassData = {
                    email: isUserExist.email,
                    code: otpCode,
                    expiry: expiryTime,
                    createdAt:Date.now(),
                    updatedAt:Date.now()
                }; 
                const insertedRes = new this.OtpModel( insertForgotPassData);
                const getInsertedRes = await insertedRes.save();
                console.log(getInsertedRes);
            }
        }); 
        return {
            message: 'Otp has been sent successfully!',
        };
    }catch (error) {
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
      const token = sign({email:isCodeVerified.email} ,  "process.env.SECRET_KEY" , { expiresIn: '7d' });;
      return {
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

async resetPass(newPass:newPassDTO){
  try{
      const decodedToken = await this.jwtService.verifyAsync(
         newPass.token
      );
    
      const otp = await this.OtpModel.findOne({ email: decodedToken.email });
      if(!otp){
          throw new HttpException('Bad Request', HttpStatus.NOT_FOUND);
      }
      const user = await this.UserModel.findOne({email: decodedToken.email });
      const isSameNewPass = comparePassword(newPass.password, user.password);
      if(isSameNewPass){
          throw new HttpException('Cannot set this password', HttpStatus.NOT_ACCEPTABLE);
      }

      const decodedPass = encodePassword(newPass.password);

      user.password = decodedPass;

      const updatedUser = await new this.UserModel(user);
      updatedUser.save();

      await this.OtpModel.deleteOne({ email: decodedToken.email  });
      return {
          message: 'Password has been changed successfully'
      };
  }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
  }
}



 
}