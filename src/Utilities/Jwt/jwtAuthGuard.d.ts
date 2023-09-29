import { ExecutionContext } from '@nestjs/common';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private rolePassed;
    constructor(role: string);
    canActivate(context: ExecutionContext): boolean;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
