import { Module } from '@nestjs/common';
import { AuthService } from './Services/auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../../Modules/User/user.module';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Otp, OtpSchema } from './Schema/otp.schema';
import {  Users, UsersSchema } from '../User/Schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../Utilities/Jwt/jwtStrategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';


@Module({
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema
      },
      {
        name:Otp.name,
        schema: OtpSchema
      }
    ]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory:async (configService: ConfigService) =>  ( {
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn:  configService.get('JWT_SECRET_EXPIRY') },
      })
    }),
    UserModule,
  ],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController],
  
})
export class AuthModule {}
  