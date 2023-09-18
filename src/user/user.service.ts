import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
// import { User } from 'src/types/user';
// import { RegisterDTO } from './register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from 'src/auth/dto/login.dto';
// import { Payload } from 'src/types/payload';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private userModel: Model<User>,
      ) {}
    
      async create(CreateUserDto: CreateUserDto) {
        const { email } = CreateUserDto;
        const user = await this.userModel.findOne({ email });
        if (user) {
          throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        }
      
        const hashed = await bcrypt.hash(CreateUserDto.password, 10);
        CreateUserDto.password = hashed;
        const createdUser = new this.userModel(CreateUserDto);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
      }


    // login func

    async findByLogin(UserDTO: LoginDTO) {

      const { email, password } = UserDTO;
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
      }
      if (await bcrypt.compare(password, user.password)) {
        return this.sanitizeUser(user)
      } else {
        throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
      }
    }

   // return user object without password
      sanitizeUser(user: User) { 
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
      }
}
 