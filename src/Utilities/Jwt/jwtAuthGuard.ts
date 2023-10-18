import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    canActivate(context: ExecutionContext) {
        return super.canActivate(context)
    }

    handleRequest<IAuthPayload>(err: any | unknown, user: IAuthPayload): IAuthPayload {

        if (user) {

            return user;

        } else {

            throw err || new UnauthorizedException();

        }

    }

}