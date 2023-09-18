import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from '../User/Services/user.service';
import { AuthService } from './Services/auth.service';
import { createUserDTO } from '../User/DTO/CreateUser.dto';
import { userLoginDTO } from './DTO/UserLogin.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        
      ) {} 

    @Post('register')
    async register(@Body() CreateUserDto: createUserDTO) {
      // const user = await this.userService.create(CreateUserDto);
      // const payload ={
      //   email:user.email
      // }
    
  
      // const token = await this.authService.signPayload(payload);
      // return { user, token };
    // }
    // @Post('login')
    // async login(@Body() UserDTO: userLoginDTO) {
    //   const user = await this.userService.findByLogin(UserDTO);

    //   const payload ={
    //     email:user.email
    //   }
    
     
    //   // const token = await this.authService.signPayload(payload);
    //   return { user, token}; 
    }

}