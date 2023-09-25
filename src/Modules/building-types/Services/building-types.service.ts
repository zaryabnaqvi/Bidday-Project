import { Injectable } from '@nestjs/common';
import { CreateBuildingTypeDTO } from '../dto/create-building-type.dto';
import { UpdateBuildingTypeDTO } from '../dto/update-building-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BuildingType } from '../Schemas/projet-code.schema';
import { Model } from 'mongoose';
import { HttpException,HttpStatus } from '@nestjs/common';
import { CreateBuildingType } from '../Interface/building-type.interface';
// import { privateDecrypt } from 'crypto';

@Injectable()
export class BuildingTypesService {
  constructor(@InjectModel(BuildingType.name) private BuildingTypeModel : Model<BuildingType> ){}
 async create(createBuildingTypeDto: CreateBuildingTypeDTO) {
    try{
    const BuildingTypeExist = await this.BuildingTypeModel.findOne({BuildingTypeName:createBuildingTypeDto.BuildingTypeName});
    if(!BuildingTypeExist){
      throw new HttpException('No Building Type found', HttpStatus.NOT_FOUND);
    }
    const newBuildingType : CreateBuildingType = createBuildingTypeDto
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
    return await this.BuildingTypeModel.find();
  }

  async findOne(id: string ) {
    return await this.BuildingTypeModel.findOne({_id:id});
  }

  async update(id: string, updateBuildingTypeDto: UpdateBuildingTypeDTO) {

    try{
      await this.BuildingTypeModel.findByIdAndUpdate(id, updateBuildingTypeDto);
      const updatedBuidingTypeData = await this.BuildingTypeModel.findOne({
          _id: id
      });
      return {
          statusCode: HttpStatus.OK,
          message: 'Buiding Type Data Updated Successfully',
          data: updatedBuidingTypeData,
      };
  }catch (error) {
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

