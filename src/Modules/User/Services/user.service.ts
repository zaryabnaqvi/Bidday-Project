import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Users } from '../Schema/user.schema';
import { Roles } from '../../../Utilities/Template/types';
import { usersByRoleDTO } from '../DTO/UsersByRole.dto';
import { updateUserDTO } from '../DTO/UpdateUser.dto';
import { IUpdateUser } from '../Interfaces/IUpdateUser.interface';
import { encodePassword } from '../../../Utilities/Hashing/bcrypt';
import { Users } from '../Schema/user.schema';

@Injectable()
export class UserService {

  constructor(  
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}

  async fetchUsers(){
    try{
      const users = await this.userModel.find();
      if(users.length === 0){
        throw new HttpException('No user found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'Users Found Successfully',
        data: users
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async fetchUserById(id: string){
    try{
      const userById = await this.userModel.findOne({
        _id: id
      });
      if(!userById){
        throw new HttpException('No user found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'User by Id  Found Successfully',
        data: userById
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async fetchUsersByRole(userBody: usersByRoleDTO){
    try{
      const usersByRole = await this.userModel.find({
        role: userBody.role
      });
      if( usersByRole.length === 0 ){
        throw new HttpException('No user with this role found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'User by Role  Found Successfully',
        data: usersByRole
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updateUser(id: string, userBody: updateUserDTO){
    try{
      console.log("In the update user Services")
      if (userBody.password) {
        userBody.password = encodePassword(userBody.password);
      }
    
      await this.userModel.findByIdAndUpdate(id, userBody);
      const updatedUserData = await this.userModel.findOne({
        _id: id
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'User Data Updated Successfully',
        data: updatedUserData,
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteUser(id: string){
    try{
      const userById = await this.userModel.findOne({
        _id: id
      });
      if(!userById){
        throw new HttpException('User with this id not found', HttpStatus.NOT_FOUND);
      }
      //Deleting a user
      await this.userModel.findByIdAndRemove(id);
      return {
        statusCode: HttpStatus.OK,
        msg: 'User deleted Successfully'
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
 