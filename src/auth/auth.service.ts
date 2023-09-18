
import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';
import { PayloadDTO } from './dto/payload.dto';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {}
  
  async signPayload(email: PayloadDTO) {
    return sign(email, "process.env.SECRET_KEY", { expiresIn: '7d' });
  }
 
}