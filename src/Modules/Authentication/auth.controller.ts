import { Body, Controller, Get, Post, UseGuards,UsePipes,ValidationPipe,Request } from '@nestjs/common';
// import {Request} from "express"
import { UserService } from '../User/Services/user.service';
import { AuthService } from './Services/auth.service';
import { createUserDTO } from '../User/DTO/CreateUser.dto';
import { userLoginDTO } from './DTO/UserLogin.dto';
import { resetPasswordDTO } from './DTO/ResetPass.dto';
import { verifyOtpDTO } from './DTO/VerifyOtp.dto';
import { newPassDTO } from './DTO/NewPass.dto';
import {AuthGuard} from "@nestjs/passport"


@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        
      ) {} 

    @Post('register')
    
    @UsePipes(ValidationPipe)
  
    async register(@Body() CreateUserDto: createUserDTO) {
      return await this.authService.createUser(CreateUserDto);


      // const payload ={
      //   email:user.email
      // }
    
  
      // const token = await this.authService.signPayload(payload);
      // return { user, token };
    }
    @Post('login')
    
    @UsePipes(ValidationPipe)
    async login(@Body() UserDTO: userLoginDTO) {
      return await this.authService.userLogin(UserDTO);
      

      // const payload ={
      //   email:user.email
      // }
    
     
      // const token = await this.authService.signPayload(payload);
      // return { user, token}; 
    }

    @Post('requestResetPassword')
  
    
    @UsePipes(ValidationPipe)
    async reqResetPass(@Body() reqBody: resetPasswordDTO){
        const result = await this.authService.requestResetPassword(reqBody);
        return result;
    }

    @Post('verifyOtp')
  

    @UsePipes(ValidationPipe)
    async verifyOtp(@Body() reqBody: verifyOtpDTO){
        const result = await this.authService.verifyOtp(reqBody);
        return result;
    }

    @Post('resetPassword')
    
    @UsePipes(ValidationPipe)
    async resetPass(@Body() reqBody: newPassDTO){
        const result =  await this.authService.resetPass(reqBody);
        return result;
    }

    @Post('/hiddenmessage')
    @UseGuards(AuthGuard("jwt"))
    hiddeninfo(@Request() req ):string{
      return "secrets" + JSON.stringify(req.user)
    }




}