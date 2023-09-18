import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        
      ) {} 

    @Post('register')
    async register(@Body() CreateUserDto: CreateUserDto) {
      const user = await this.userService.create(CreateUserDto);
      const payload ={
        email:user.email
      }
    
  
      const token = await this.authService.signPayload(payload);
      return { user, token };
    }
    @Post('login')
    async login(@Body() UserDTO: LoginDTO) {
      const user = await this.userService.findByLogin(UserDTO);

      const payload ={
        email:user.email
      }
    
     
      const token = await this.authService.signPayload(payload);
      return { user, token}; 
    }

}