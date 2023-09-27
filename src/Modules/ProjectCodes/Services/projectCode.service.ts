import { Injectable } from '@nestjs/common';
import { CreateProjectCodeDTO } from '../DTO/CreateProjectCode.dto';
import { UpdateProjectCodeDTO } from '../DTO/UpdateProjectCode.dto';
import { Model, Types } from 'mongoose';
import { ProjectCode } from '../Schemas/projectCode.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { IProjectCode } from '../Interfaces/IProjectCode.interface';
import { Market } from 'src/Modules/Markets/Schemas/maket.schema';
import { IUpdateProjectCode } from '../Interfaces/IUpdateProjectCode.interface';

@Injectable()
export class ProjectCodeService {

  constructor(
    @InjectModel(ProjectCode.name) private projectCodeModel: Model<ProjectCode>,
    @InjectModel(Market.name) private marketModel: Model<Market>,
  ){}

  async create(createProjectCodeDto: CreateProjectCodeDTO){
    try{
        const { MarketId } = createProjectCodeDto;
        const isProjectCodeExist = await this.projectCodeModel.findOne({
          name: createProjectCodeDto.name,
          MarketId
        });
        if(isProjectCodeExist){
          throw new HttpException('ProjectCode is already exist', HttpStatus.BAD_REQUEST)
        } 
        const projectCode : IProjectCode = {
          name:createProjectCodeDto.name,
          marketId: MarketId
        }
        const newProjectCode = new this.projectCodeModel(projectCode);
        const createdProjectCode = await newProjectCode.save();
        // await this.marketService.AddProjectCodeToMarket(MarketId, createdProjectCode)
      return {
        statusCode: HttpStatus.OK,
        msg: "Project Code added Sucessfully",
        data: createdProjectCode
      };
    }catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try{
      const projectCodes = await this.projectCodeModel.find();
      if(projectCodes.length === 0){
        throw new HttpException('Project Codes not found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: "Project Code Found Sucessfully",
        data: projectCodes
      };
    }catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string) {
    try{
      const projectCodeById = await this.projectCodeModel.findById(id);
      if(!projectCodeById){
        throw new HttpException('Project Codes by Id not found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: "Project Code by Id Found Sucessfully",
        data: projectCodeById
      };
    }catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByMarketId(id: string) {
    try{
      const projectCodeByMarketId = await this.projectCodeModel.find({
        marketId: id
      });
      if(projectCodeByMarketId.length === 0){
        throw new HttpException('Project Codes by Market Id not found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: "Project Code by Market Id Found Sucessfully",
        data: projectCodeByMarketId
      };
    }catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, updateProjectCodeDto: UpdateProjectCodeDTO) {
    try{
      if(Object.keys(updateProjectCodeDto).length === 0){
        throw new HttpException('Empty Body is not allowed', HttpStatus.NOT_ACCEPTABLE);
      }
      if(updateProjectCodeDto.marketId){
        const isMarketExist = await this.marketModel.findById(updateProjectCodeDto.marketId);
        if(!isMarketExist){
          throw new HttpException('Market with this does not exist',HttpStatus.NOT_FOUND);
        }
      }
      const updateProjectCode: IUpdateProjectCode = updateProjectCodeDto;
      await this.projectCodeModel.findByIdAndUpdate(id, updateProjectCode);
      const updatedProjectCode = await this.projectCodeModel.findById(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'ProjectCode Data Updated Successfully',
        data: updatedProjectCode,
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
      await this.projectCodeModel.findByIdAndDelete(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'ProjectCode Deleted Successfully',
      }
    }catch (error) {
    throw new HttpException(
      error.message,
      error.status || HttpStatus.BAD_REQUEST,
    );
  }
  }
}
