// import { ExtractJwt, Strategy,VerifiedCallback } from 'passport-jwt';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable ,HttpException,HttpStatus } from '@nestjs/common';
// import { AuthService } from '../../Modules/Authentication/Services/auth.service';
// import { ConfigService } from '@nestjs/config';
// // import { ConfigService, ConfigModule } from '@nestjs/config';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     private configService: ConfigService,
//     private authService: AuthService
//   ) {
//     super({
//         usernameField: "email",
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         ignoreExpiration: false,
//         secretOrKey: configService.get('JWT_SECRET'),
        
//     });
// }
// async validate(payload: any, done: VerifiedCallback) {
//   const user = await this.authService.validate(payload);
//   if (!user) {
//     return done(
//       new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
//       false,
//     );
//   }
//   return user;
// }
// }
import { IAuthPayload } from "@app/Modules/Authentication/Interfaces/IPayload.interface";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        configService: ConfigService
    ) {
        super({
            // usernameField: 'email',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET')
        })
    }

    async validate(payload: IAuthPayload) {
        //TODO: add validtion service
        return {
            email: payload.email,
            id: payload.id,
            role: payload.role
        }

    }
}