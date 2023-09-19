import {
    Injectable,
    ExecutionContext,
    UnauthorizedException,
    CanActivate
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  @Injectable()
  export class JwtAuthGuard implements CanActivate  {

    private rolePassed : string;
    constructor(role : string){
      this.rolePassed = role;
    }


    canActivate(context: ExecutionContext): boolean {
      const ctx = context.switchToHttp();
      const request :any =ctx.getRequest<Request>();
      return this.rolePassed == request.user.role
    }
  
    handleRequest(err:any, user:any, info:any) {
      if (user) {
        return user;
      }else{
          throw err || new UnauthorizedException();
      }
    }
  }
  