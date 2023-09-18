import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
// import { ConfigService, ConfigModule } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
 
  ) {
    super({
        usernameField: "email",
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: "process.env.SECRET_KEY",
        
    });
}
  async validate(payload: any) {
    return { email: payload.email, id: payload.id };
  }
}
