
import { 
  Body, 
  Controller, 
  Get, 
  Post, 
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request 
} from '@nestjs/common';
import { UserService } from '../User/Services/user.service';
import { AuthService } from './Services/auth.service';
import { createUserDTO } from '../User/DTO/CreateUser.dto';
import { userLoginDTO } from './DTO/UserLogin.dto';
import { resetPasswordDTO } from './DTO/ResetPass.dto';
import { verifyOtpDTO } from './DTO/VerifyOtp.dto';
import { newPassDTO } from './DTO/NewPass.dto';
import { AuthGuard } from "@nestjs/passport";
// import { JwtAuthGuard } from 'src/Utilities/Jwt/jwtAuthGuard';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {} 

  //#region : Authentication

  //Ready and Verified by Jawwad
  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() CreateUserDto: createUserDTO) {
    const result = await this.authService.createUser(CreateUserDto);
    return result;
  }

  //Ready and Verified by Jawwad
  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() UserDTO: userLoginDTO) {
    const result = await this.authService.userLogin(UserDTO);
    return result;
  }

  //Ready and Verified by Jawwad
  @Post('requestResetPassword')
  @UsePipes(ValidationPipe)
  async reqResetPass(@Body() reqBody: resetPasswordDTO){
    const result = await this.authService.requestResetPassword(reqBody);
    return result;
  }

  //Ready and Verified by Jawwad
  @Post('verifyOtp')
  @UsePipes(ValidationPipe)
  async verifyOtp(@Body() reqBody: verifyOtpDTO){
    const result = await this.authService.verifyOtp(reqBody);
    return result;
  }

  //Ready and Verified by Jawwad
  @Post('resetPassword')
  @UsePipes(ValidationPipe)
  async resetPass(@Body() reqBody: newPassDTO){
    const result =  await this.authService.resetPass(reqBody);
    return result;
  }
  //#endregion

  //#region : Checking Guard
  @Post('/hiddenmessage')
  @UseGuards(AuthGuard("jwt")) //I have to look at the auth guard and strategy again
  // @UseGuards(JwtAuthGuard)
  hiddeninfo(@Request() req: any ):string {
    console.log(req.user);
    const result = "secrets" + JSON.stringify(req.user);
    return result;
  }
  //#endregion
}

