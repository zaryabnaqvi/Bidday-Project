import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDivisionCategoryDto } from '../DTO/CreateDivisionCategory.DTO';
import { UpdateDivisionCategoryDto } from '../DTO/UpdateDivisionCategory.DTO';
import { DivisionCategory } from '../Schemas/divisionCategory.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICreateDivisionCategory } from '../Interfaces/ICreateDivisionCategory.interface';
import { IUpdateDivisionCategory } from '../Interfaces/IUpdateDivisionCategory.interface';

@Injectable()
export class DivisionCategoryService {
  constructor(  
    @InjectModel(DivisionCategory.name) private readonly divisionCategoryModel: Model<DivisionCategory>,
  ) {}

  async fetchDivisionCategory(){
    try{
      const divisionCateDivisionCategory = await this.divisionCategoryModel.find();
      if(divisionCateDivisionCategory.length === 0){
        throw new HttpException('No division found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'DivisionCategory Found Successfully',
        data: divisionCateDivisionCategory
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async fetchDivisionCategoryById(id: string){
    try{
      const divisionCategoryById = await this.divisionCategoryModel.findOne({
        _id: id
      });
      if(!divisionCategoryById){
        throw new HttpException('No Division found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'Division by Id  Found Successfully',
        data: divisionCategoryById
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async createDivisionCategory( divisionId,createDivisionCategoryBody: CreateDivisionCategoryDto){
    try{
        const {  divisionCategoryName } = createDivisionCategoryBody;
        const isDivisionExist = await this.divisionCategoryModel.findOne({
            divisionId,
            divisionCategoryName
        });
        if(isDivisionExist){
            throw new HttpException('Division is already exist', HttpStatus.BAD_REQUEST)
        }  

        const toCreateDivisionCategory: ICreateDivisionCategory = {  divisionId, divisionCategoryName};
        const newDivision = new this.divisionCategoryModel(toCreateDivisionCategory);
        const createdDivision = await newDivision.save();
      return {
        statusCode: HttpStatus.OK,
        msg: 'Division Created Successfully',
        data: createdDivision
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updateDivisionCategory(id: string, divisionBody: UpdateDivisionCategoryDto){
    try{
        const updateDivisionCategory: IUpdateDivisionCategory = divisionBody
        await this.divisionCategoryModel.findByIdAndUpdate(id, updateDivisionCategory);
        const updatedDivisionData = await this.divisionCategoryModel.findOne({
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
      const divisionCategoryById = await this.divisionCategoryModel.findOne({
        _id: id
      });
      if(!divisionCategoryById){
        throw new HttpException('Division with this id not found', HttpStatus.NOT_FOUND);
      }
      //Deleting a Division
      await this.divisionCategoryModel.findByIdAndRemove(id);
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
