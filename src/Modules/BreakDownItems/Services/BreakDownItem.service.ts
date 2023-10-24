import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBreakDownItemDto } from '../DTO/createBreakDownItemdto';
import { UpdateBreakDownItemDto } from '../DTO/updateBreakDownItem.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BreakDownItem } from '../Schema/BreakDownItem.schema';
import { Model } from 'mongoose';
import { Project } from '../../../Modules/Projects/Schemas/project.schema';
import { DivisionCategory } from '../../../Modules/DivisionCategory/Schemas/divisionCategory.schema';
import { throwIfEmpty } from 'rxjs';
import { ICreateBreakDownItem } from '../Interfaces/ICreateBreakDownItem.interface';
import { IUpdateBreakDownItem } from '../Interfaces/IUpdateBreakDownItem.interface';
import { Divisions } from '../../../Modules/Divisions/Schema/division.schema';
import { InitialBid } from '../../../Modules/initialBid/Schema/InitialBid.schema';
import { IndividualBid } from '@app/Modules/IndividualBid/Schema/IndividualBid.schema';
import { Bidders } from '@app/Modules/Bidders/Schema/bidder.schema';

@Injectable()

export class BreakDownItemService {

  constructor(
    @InjectModel(BreakDownItem.name) private readonly breakDownItemModel: Model<BreakDownItem>,
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
    @InjectModel(DivisionCategory.name) private readonly divisionCategoryModel: Model<DivisionCategory>,
    @InjectModel(Divisions.name) private readonly divisionModel: Model<Divisions>,
    @InjectModel(InitialBid.name) private readonly initialBidModel: Model<InitialBid>,
    @InjectModel(IndividualBid.name) private readonly individualBidModel: Model<IndividualBid>,
    @InjectModel(Bidders.name) private readonly bidderModel : Model<Bidders>

  ) { }


  async create(projectId: string, divisionCategoryId: string, createBreakDownItemDto: CreateBreakDownItemDto) {
    try {
      const isProjectExist = await this.projectModel.findOne({ _id: projectId })
      if (!isProjectExist) {
        throw new HttpException("Project not exist", HttpStatus.BAD_REQUEST)
      }
      const isDivisionCategoryExist = await this.divisionCategoryModel.findOne({ _id: divisionCategoryId })
      if (!isDivisionCategoryExist) {
        throw new HttpException("Division category not exist", HttpStatus.BAD_REQUEST)
      }
      const BreakDownItemModel: ICreateBreakDownItem = {
        divisionCategoryId,
        projectId,
        BreakdownItemArea: createBreakDownItemDto.BreakdownItemArea,
        BreakdownItemName: createBreakDownItemDto.BreakdownItemName,
        BreakdownItemPerUnit: createBreakDownItemDto.BreakdownItemPerUnit,
        BreakdownItemQuantity: createBreakDownItemDto.BreakdownItemQuantity
      }
      const newBreakDownItem = new this.breakDownItemModel(BreakDownItemModel)
      const createdBreakDownItem = await newBreakDownItem.save()
      return {
        msg: "DivisonItemCategory was Created Sucessfully",
        data: createdBreakDownItem
      }
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST)
    }


  }

  async findAll() {
    try {
      const BreakDownItems = await this.breakDownItemModel.find();
      if (BreakDownItems.length === 0) {
        throw new HttpException('BreakDownItems not found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'BreakDownItems Found Successfully',
        data: BreakDownItems
      };

    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST
      )
    }
  }

  async findBreakDowmItemByProjectForDivision(projectId: string, divisionCategoryId: string) {
    try {
      let output :any[]=[]
      const BreakDownItems = await this.breakDownItemModel.find({ projectId, divisionCategoryId });
      if (BreakDownItems.length === 0) {
        throw new HttpException('BreakDownItems not found', HttpStatus.NOT_FOUND);
      }
      for(let i=0;i<BreakDownItems.length;i++){
        const bidData = await this.individualBidModel.find({breakDownItemId:BreakDownItems[0].id})
        const outputModel={
          BreakDownItem:BreakDownItems[0],
          IndividualBid:bidData

        }
        output.push(outputModel)
      }

      return {
        statusCode: HttpStatus.OK,
        msg: 'BreakDownItems for Project Found Successfully',
        data: output
      };

    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST
      )
    }
  }

  async findAllCategoryBreakDownforDivision(DivisonId: string,projectId:string) {
    try {
      let output=[]
      const DivisionCategorys = await this.divisionCategoryModel.find({ divisionId: DivisonId })
      if (DivisionCategorys.length === 0) {
        throw new HttpException('BreakDownItems not found', HttpStatus.NOT_FOUND);
      }
      for(let i =0; i<DivisionCategorys.length;i++){
        const BreakDownItems = await this.findBreakDowmItemByProjectForDivision(projectId,DivisionCategorys[i].id)
        const initialBid = await this.initialBidModel.find({divisionCategoryId:DivisionCategorys[i].id,projectId:projectId})
        const Bidders = await this.bidderModel.find({divisionCategoryId:DivisionCategorys[i].id,projectId:projectId})

        let outputModel = {
            initialBid:initialBid,
            DivisionCategoryId:DivisionCategorys[i].id,
            DivisionCategoryName:DivisionCategorys[i].divisionCategoryName,
            BreakDownItems:BreakDownItems.data,
            Bidders:Bidders
        }
        output.push(outputModel)
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'Break Down Items for Project Found Successfully',
        data:output
      }

    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST
      )
    }
  }


  async findOne(id: string) {
    try{
      const breakDownItemById = await this.breakDownItemModel.findById(id);
      if(!breakDownItemById){
        throw new HttpException('Break Down Items by Id not found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: "Break Down Item by Id Found Sucessfully",
        data: breakDownItemById
      };
    }catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

 async update(id: string, updateBreakDownItemDto: UpdateBreakDownItemDto) {
  
      if(Object.keys(updateBreakDownItemDto).length === 0){
        throw new HttpException('Empty Body is not allowed', HttpStatus.NOT_ACCEPTABLE);
      }
    
     
      try{
      const updateBreakDownItem: IUpdateBreakDownItem = updateBreakDownItemDto;
      await this.breakDownItemModel.findByIdAndUpdate(id, updateBreakDownItem);
      const updatedBreakDownItem = await this.breakDownItemModel.findById(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'BreakDownItem Data Updated Successfully',
        data: updatedBreakDownItem,
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    
  }}


  async remove(id: string) {

    try{
      await this.breakDownItemModel.findByIdAndDelete(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'BreakDownItem Deleted Successfully',
      }
    }catch (error) {
    throw new HttpException(
      error.message,
      error.status || HttpStatus.BAD_REQUEST,
    );
  }
  }
  }
