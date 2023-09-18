import { Module } from '@nestjs/common';
import { AuthService } from './Services/auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/Modules/User/Services/user.service';
import { UserModule } from 'src/Modules/User/user.module';
// import { UserService } from 'src/user/user.service';

@Module({
  imports:[UserModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
