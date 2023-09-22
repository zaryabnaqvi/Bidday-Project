import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../schema/user.schema';
import { Roles } from 'src/Utilities/Template/types';
import { usersByRoleDTO } from '../DTO/UsersByRole.dto';

@Injectable()
export class UserService {

  constructor(  
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}

  async fetchUsers(){
    try{

    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async fetchUserById(id: number){
    try{

    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async fetchUsersByRole(role: usersByRoleDTO){
    try{

    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
 