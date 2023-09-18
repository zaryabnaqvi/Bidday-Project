
import { Injectable } from '@nestjs/common';
import { sign } from 'crypto';
import { UserService } from 'src/Modules/User/Services/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {}
  
  async signPayload(email: string) {
    // return sign(email, "process.env.SECRET_KEY", { expiresIn: '7d' });
  }
 
}