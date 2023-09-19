import { ExtractJwt, Strategy,VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable ,HttpException,HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/Modules/Authentication/Services/auth.service';
// import { ConfigService, ConfigModule } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService :AuthService 
 
  ) {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: "process.env.SECRET_KEY",
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

  return payload;
}
}
