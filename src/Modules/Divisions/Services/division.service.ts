import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Divisions } from '../Schema/division.schema';
import { updateDivisionDTO } from '../DTO/UpdateDivision.dto';
import { createDivisionDTO } from '../DTO/CreateDivision.dto';
import { ICreateDivision } from '../Interfaces/ICreateDivision.interface';
import { IUpdateDivision } from '../Interfaces/IUpdateDivision.interface';

@Injectable()
export class DivisionService {

  constructor(  
    @InjectModel(Divisions.name) private readonly divisionModel: Model<Divisions>,
  ) {}

  async fetchDivisions(){
    try{
      const divisions = await this.divisionModel.find();
      if(divisions.length === 0){
        throw new HttpException('No user found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'Divisions Found Successfully',
        data: divisions
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async fetchDivisionById(id: string){
    try{
      const divisionById = await this.divisionModel.findOne({
        _id: id
      });
      if(!divisionById){
        throw new HttpException('No Division found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'Division by Id  Found Successfully',
        data: divisionById
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async createDivision( createDivisionBody: createDivisionDTO){
    try{
        const { divisionNumber, divisionName } = createDivisionBody;
        const isUserExist = await this.divisionModel.findOne({
            divisionNumber,
            divisionName
        });
        if(isUserExist){
            throw new HttpException('Division is already exist', HttpStatus.BAD_REQUEST)
        }        
        const toCreateDivision: ICreateDivision = createDivisionBody;
        const newUser = new this.divisionModel(toCreateDivision);
        const createdUser = await newUser.save();
      return {
        statusCode: HttpStatus.OK,
        msg: 'User by Role  Found Successfully',
        data: createdUser
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updateDivision(id: string, divisionBody: updateDivisionDTO){
    try{
        
        const updateDivision: IUpdateDivision = divisionBody
        await this.divisionModel.findByIdAndUpdate(id, updateDivision);
        const updatedDivisionData = await this.divisionModel.findOne({
            _id: id
        });

        return {
            statusCode: HttpStatus.OK,
            message: 'Division Data Updated Successfully',
            data: updatedDivisionData,
        };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteDivision(id: string){
    try{
      const divisionById = await this.divisionModel.findOne({
        _id: id
      });
      if(!divisionById){
        throw new HttpException('Division with this id not found', HttpStatus.NOT_FOUND);
      }
      //Deleting a Division
      await this.divisionModel.findByIdAndRemove(id);
      return {
        statusCode: HttpStatus.OK,
        msg: 'Division deleted Successfully'
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
 