import { Injectable } from '@nestjs/common';
import { CreateMarketDto } from '../dto/create-market.dto';
import { UpdateMarketDto } from '../dto/update-market.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Market } from '../Schemas/maket.schema';
import { Model, Types } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
@Injectable()
export class MarketService {

  constructor(@InjectModel(Market.name) private marketModel : Model<Market>){}



  async create(createMarketDto: CreateMarketDto) {
    try{
      
      const isMarketCodeExist = await this.marketModel.findOne({
          name:createMarketDto.name
      });
      if(isMarketCodeExist){
          throw new HttpException('market is already exist', HttpStatus.BAD_REQUEST)
      }        
      // const toCreatemarket:  = MarketCodeInterface;
      const newMarketCode = new this.marketModel(createMarketDto);
      const createdMarket = await newMarketCode.save();
    return {
      statusCode: HttpStatus.OK,
      msg: 'User by Role  Found Successfully',
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
      const Market = await this.marketModel.find();
      if(Market.length === 0){
        throw new HttpException('No market found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        msg: 'Market Found Successfully',
        data: Market
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }



  



  async findOne(id: string | Types.ObjectId) {

    const isMarketCodeExist = await this.marketModel.findOne({ _id:id});
    if(!isMarketCodeExist){
      throw new HttpException('Market not exist', HttpStatus.NOT_FOUND);
    }
    return isMarketCodeExist;
  }

 


  async update(id: string | Types.ObjectId, updateMarketDto: UpdateMarketDto) {
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
      throw new HttpException('market with this id not found', HttpStatus.NOT_FOUND);
    }
    //Deleting a market
    await this.marketModel.findByIdAndRemove(id);
    return {
      statusCode: HttpStatus.OK,
      msg: 'market deleted Successfully'
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
