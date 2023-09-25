import { Injectable } from '@nestjs/common';
import { CreateProjectCodeDto } from '../dto/create-project-code.dto';
import { UpdateProjectCodeDto } from '../dto/update-project-code.dto';
import { Model, Types } from 'mongoose';
import { ProjectCode } from '../Schemas/project-code.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { MarketService } from 'src/Modules/market/Services/market.service';

@Injectable()
export class ProjectCodeService {
  constructor(@InjectModel(ProjectCode.name) private projectCodeModel : Model<ProjectCode>,private readonly marketService : MarketService ){}


  
      async create( MarketId : string | Types.ObjectId,createProjectCodeDto: CreateProjectCodeDto){
    try{
        const isProjectCodeExist = await this.projectCodeModel.findOne({
            name:createProjectCodeDto.name
        });
        if(isProjectCodeExist){
            throw new HttpException('ProjectCode is already exist', HttpStatus.BAD_REQUEST)
        } 
        const pc={
          name:createProjectCodeDto.name,
          MarketId:MarketId
        }
        const newProjectCode = new this.projectCodeModel(pc);
        const createdProjectCode = await newProjectCode.save();
        this.marketService.AddProjectCodeToMarket(MarketId,createdProjectCode)
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


  
  
  // findAll() {
  //   return `This action returns all projectCode`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} projectCode`;
  // }


  async update(MarketId:string ,id: string | Types.ObjectId, updateProjectCodeDto: UpdateProjectCodeDto) {
    try{

      await this.marketService.RemoveProjectCodeToMarket(MarketId,id);
      await this.projectCodeModel.findByIdAndUpdate(id, updateProjectCodeDto);
      
      const updatedProjectCode = await this.projectCodeModel.findOne({
          _id: id
      });
      await this.marketService.AddProjectCodeToMarket(MarketId,updateProjectCodeDto)


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
  

 async remove(id: string | Types.ObjectId, MarketId : string | Types.ObjectId) {
    try{
    this.marketService.RemoveProjectCodeToMarket(MarketId,id)
    
    }catch (error) {
    throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
    );
  }
 }

}
