import { Module } from '@nestjs/common';
import { AuthService } from './Services/auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/Modules/User/Services/user.service';
import { UserModule } from 'src/Modules/User/user.module';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { OtpSchema } from './Schema/otp.schema';
import { UserSchema } from '../User/schema/user.schema';
// import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/Utilities/Jwt/jwtStrategy';


@Module({
  imports:[UserModule,MongooseModule.forFeature([{name:"Otp" , schema : OtpSchema}]),
  MongooseModule.forFeature([{name:"User" ,schema:UserSchema }]),
 
    JwtModule.register({
      global: true,
      secret: "process.env.SECRET_KEY",
      signOptions: { expiresIn: '60s' },
  
  }),
],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController],
  
})
export class AuthModule {}
  