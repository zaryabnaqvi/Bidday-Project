import { Injectable } from '@nestjs/common';
import { CreateMarketDTO } from '../DTO/CreateMarket.dto';
import { UpdateMarketDTO } from '../DTO/UpdateMarket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Market } from '../Schemas/maket.schema';
import { Model, Types } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { IMarket } from '../Interfaces/IMarket.interface';
@Injectable()
export class MarketService {

  constructor(
    @InjectModel(Market.name) private marketModel: Model<Market>
    ){}

  async create(createMarketDto: CreateMarketDTO) {
    try{
      const isMarketCodeExist = await this.marketModel.findOne({
          name: createMarketDto.name
      });
      if(isMarketCodeExist){
          throw new HttpException('Market is already exist', HttpStatus.BAD_REQUEST)
      }        
      // const toCreatemarket:  = MarketCodeInterface;
      const newMarketCode: IMarket = new this.marketModel(createMarketDto);
      const createdMarket = await newMarketCode.save();
    return {
      statusCode: HttpStatus.OK,
      msg: 'New Market Created Successfully',
      data: createdMarket
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
      const Markets = await this.marketModel.find();
      if(Markets.length === 0){
        throw new HttpException('Markets not found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'Markets Found Successfully',
        data: Markets
      };
    }catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string | Types.ObjectId) {
    try{
      const isMarketExist = await this.marketModel.findOne({ 
        _id: id
      });
      if(!isMarketExist){
        throw new HttpException('Market by Id not Found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'Market by Id Found Successfully',
        data: isMarketExist
      };
    }catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string | Types.ObjectId, updateMarketDto: UpdateMarketDTO) {
    if(Object.keys(updateMarketDto).length === 0){
      throw new HttpException('Empty Body is not allowed', HttpStatus.NOT_ACCEPTABLE);
    }
    const updateMarket = await this.marketModel.findByIdAndUpdate(id, updateMarketDto, { new: true })
    return {
      statusCode: HttpStatus.OK,
      message: 'Market Updated Successfully',
      data: updateMarket,
    };
  }

  async remove(id: string | Types.ObjectId) {
    try{
      const marketById = await this.marketModel.findOne({
        _id: id
      });
      if(!marketById){
        throw new HttpException('Market with this id not found', HttpStatus.NOT_FOUND);
      }
      //Deleting a market
      await this.marketModel.findByIdAndRemove(id);
      return {
        statusCode: HttpStatus.OK,
        msg: 'Market deleted Successfully'
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async AddProjectCodeToMarket(MarketId: string | Types.ObjectId, newProjectCode: any,){
    const updatedProjectCodeIds =await this.marketModel.updateOne(
      { _id: MarketId },
      { $push: { ProjectCodeIds: newProjectCode } },
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Market Project Code Updated Successfully',
      data: updatedProjectCodeIds,
    };
  }

  async RemoveProjectCodeToMarket(MarketId: string | Types.ObjectId, newProjectCode : Types.ObjectId|string,){
    const removeProjectCodeIds =await this.marketModel.updateOne(
      { _id: MarketId },
      { $push: { ProjectCodeIds: {_id:newProjectCode }} },
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Market Project Code Updated Successfully',
      data: removeProjectCodeIds,
    }; 
  }
}
