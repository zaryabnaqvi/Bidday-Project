import { VerifiedCallback } from 'passport-jwt';
import { AuthService } from 'src/Modules/Authentication/Services/auth.service';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private authService;
    constructor(configService: ConfigService, authService: AuthService);
    validate(payload: any, done: VerifiedCallback): Promise<any>;
}
export {};
