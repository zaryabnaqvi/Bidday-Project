import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateInitialBidDto } from '../DTO/CreateInitialBid.dto';
import { UpdateInitialBidDto } from '../DTO/UpdateInitialBid.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DivisionCategory } from '@app/Modules/divisionCategory/Schemas/divisionCategory.schema';
import { Model } from 'mongoose';
import { Project } from '@app/Modules/Projects/Schemas/project.schema';
import { Bidders } from '@app/Modules/Bidders/Schema/bidder.schema';
import { InitialBid } from '../Schema/InitialBid.schema';
import { ICreateInitialBid } from '../Interface/ICreateInitialBid.interface';

@Injectable()
export class InitialBidService {
  constructor(@InjectModel(DivisionCategory.name)private readonly divisionCategoryModel:Model<DivisionCategory>,
  @InjectModel(Project.name)private readonly projectsModel:Model<Project>,
  @InjectModel(Bidders.name)private readonly biddersModel:Model<Bidders>,
  @InjectModel(InitialBid.name)private readonly initialBidModel:Model<InitialBid>){

  }
  async create(divisionCategoryId:string,projectId:string,biddersId:string,createInitialBidDto: CreateInitialBidDto) {
    try{
      const isProjectExist = await this.projectsModel.findById(projectId);
      if(!isProjectExist){
        throw new HttpException('Project is not exist', HttpStatus.BAD_REQUEST)
      } 
      const isBidderExist = await this.biddersModel.findById(biddersId)
      if(!isBidderExist){
        throw new HttpException('Bidder is not exist', HttpStatus.BAD_REQUEST)
      } 
      const isDivisionCategoryExist = await this.divisionCategoryModel.findById(divisionCategoryId)
      if(!isDivisionCategoryExist){
        throw new HttpException('Division Category is not exist', HttpStatus.BAD_REQUEST)
      }
      const isInitialBidExist = await this.initialBidModel.findOne({biddersId:biddersId,projectId:projectId,divisionCategoryId:divisionCategoryId})
      if(isInitialBidExist){
        throw new HttpException('Initial Bid Already Exist', HttpStatus.BAD_REQUEST)
      }
      const initialBid :ICreateInitialBid = {
        amount:createInitialBidDto.amount,
        biddersId,
        divisionCategoryId,
        projectId
      }
      const createInitialBid  = new this.initialBidModel(initialBid)
      const createdInitialBid = await createInitialBid.save()

      return {
        status:HttpStatus.OK,
        msg : "Initial Bid was created Sucessfully",
        data: createdInitialBid
      }
      
    }catch(error){
      error.message,
      HttpStatus.BAD_REQUEST
    }
  }


  async update(id: string, updateInitialBidDto: UpdateInitialBidDto) {
    if(Object.keys(updateInitialBidDto).length === 0){
      throw new HttpException('Empty Body is not allowed', HttpStatus.NOT_ACCEPTABLE);
    }
    const updateInitialBid = await this.initialBidModel.findByIdAndUpdate(id, updateInitialBidDto, { new: true })
    return {
      statusCode: HttpStatus.OK,
      message: 'InitialBid Updated Successfully',
      data: updateInitialBid,
    };
  }

  async remove(id: string) {
    try{
      const initialBidById = await this.initialBidModel.findOne({
        _id: id
      });
      if(!initialBidById){
        throw new HttpException('initialBid with this id not found', HttpStatus.NOT_FOUND);
      }
      //Deleting a initialBid
      await this.initialBidModel.findByIdAndRemove(id);
      return {
        statusCode: HttpStatus.OK,
        msg: 'initialBid deleted Successfully'
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
