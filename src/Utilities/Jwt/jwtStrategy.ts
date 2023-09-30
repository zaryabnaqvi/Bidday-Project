import { ExtractJwt, Strategy,VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable ,HttpException,HttpStatus } from '@nestjs/common';
import { AuthService } from '../../Modules/Authentication/Services/auth.service';
import { ConfigService } from '@nestjs/config';
// import { ConfigService, ConfigModule } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService
  ) {
    super({
        usernameField: "email",
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: configService.get('JWT_SECRET'),
        
    });
}
async validate(payload: any, done: VerifiedCallback) {
  const user = await this.authService.validate(payload);
  if (!user) {
    return done(
      new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
      false,
    );
  }
  return user;
}
}
