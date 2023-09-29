import { Injectable } from '@nestjs/common';
import { CreateBuildingTypeDTO } from '../DTO/CreateBuildingType.dto';
import { UpdateBuildingTypeDTO } from '../DTO/UpdateBuildingType.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BuildingType } from '../Schemas/buildingType.schema';
import { Model } from 'mongoose';
import { HttpException,HttpStatus } from '@nestjs/common';
import { ICreateBuildingType } from '../Interfaces/ICreateBuildingType.interface';
// import { privateDecrypt } from 'crypto';

@Injectable()
export class BuildingTypesService {
  constructor(
    @InjectModel(BuildingType.name) private BuildingTypeModel : Model<BuildingType> 
  ){}

  async create(createBuildingTypeDto: CreateBuildingTypeDTO) {
    try{
      const BuildingTypeExist = await this.BuildingTypeModel.findOne({
        BuildingTypeName:createBuildingTypeDto.BuildingTypeName
      });
      if(BuildingTypeExist){
        throw new HttpException('Building Type already exist', HttpStatus.NOT_ACCEPTABLE);
      }
      const newBuildingType: ICreateBuildingType = createBuildingTypeDto
      const newBT = new this.BuildingTypeModel(newBuildingType)
      return await newBT.save()
    }catch(error){
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try{
      const buildingTypes = await this.BuildingTypeModel.find();
      if(buildingTypes.length === 0){
        throw new HttpException('Building Type not found', HttpStatus.NOT_FOUND);
      }
      return buildingTypes;
    }catch(error){
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string ) {
    try{
      const buildingTypeById = await this.BuildingTypeModel.findOne({
        _id: id
      });
      if(!buildingTypeById){
        throw new HttpException('Building Type by Id not found', HttpStatus.NOT_FOUND);
      }
      return buildingTypeById;
    } catch(error){
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, updateBuildingTypeDto: UpdateBuildingTypeDTO) {
    try{
      if(Object.keys(updateBuildingTypeDto).length === 0){
        throw new HttpException('Empty Body is not allowed', HttpStatus.BAD_REQUEST);
      }
      await this.BuildingTypeModel.findByIdAndUpdate(id, updateBuildingTypeDto);
      const updatedBuidingTypeData = await this.BuildingTypeModel.findOne({
          _id: id
      });
      return {
          statusCode: HttpStatus.OK,
          message: 'Buiding Type Data Updated Successfully',
          data: updatedBuidingTypeData,
      };
  } catch (error) {
    throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: string) {
    try{
      const buildingTypeExist = await this.BuildingTypeModel.findOne({
        _id: id
      });
      if(!buildingTypeExist){
        throw new HttpException('Building Type with this id not found', HttpStatus.NOT_FOUND);
      }
      await this.BuildingTypeModel.findByIdAndRemove(id);
      return {
        statusCode: HttpStatus.OK,
        msg: 'Building Type deleted Successfully'
      };
    }catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}

