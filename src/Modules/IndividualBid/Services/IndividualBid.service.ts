import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateIndividualBidDto } from '../DTO/CreateIndividualBid.dto';
import { UpdateIndividualBidDto } from '../DTO/UpdateIndividualBid.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BreakDownItem } from '../../../Modules/BreakDownItems/Schema/BreakDownItem.schema';
import { Model } from 'mongoose';
import { Bidders } from '@app/Modules/Bidders/Schema/bidder.schema';
import { IndividualBid } from '../Schema/IndividualBid.schema';
import { ICreateIndividualBid } from '../Interface/ICreateIndividualBid.interface';


@Injectable()
export class IndividualBidService {
  constructor(@InjectModel(BreakDownItem.name)private readonly BreakDownItemModel:Model<BreakDownItem>,
  @InjectModel(Bidders.name)private readonly biddersModel:Model<Bidders>,
  @InjectModel(IndividualBid.name)private readonly IndividualBidModel:Model<IndividualBid>){

  }
  async create(breakDownItemId:string,biddersId:string,createIndividualBidDto: CreateIndividualBidDto) {
    try{
    
      const isBidderExist = await this.biddersModel.findById(biddersId)
      if(!isBidderExist){
        throw new HttpException('Bidder is not exist', HttpStatus.BAD_REQUEST)
      } 
      const isBreakDownItemExist = await this.BreakDownItemModel.findById(breakDownItemId)
      if(!isBreakDownItemExist){
        throw new HttpException('Break Down Item is not exist', HttpStatus.BAD_REQUEST)
      }
      const isIndividualBidExist = await this.IndividualBidModel.findOne({biddersId:biddersId,BreakDownItemId:breakDownItemId})
      if(isIndividualBidExist){
        throw new HttpException('Initial Bid Already Exist', HttpStatus.BAD_REQUEST)
      }
      const IndividualBid :ICreateIndividualBid = {
        amount:createIndividualBidDto.amount,
        breakDownItemId,
        biddersId,
      }
      const createIndividualBid  = new this.IndividualBidModel(IndividualBid)
      const createdIndividualBid =await createIndividualBid.save()

      return {
        status:HttpStatus.OK,
        msg : "Initial Bid was created Sucessfully",
        data: createdIndividualBid
      }
      
    }catch(error){
      error.message,
      HttpStatus.BAD_REQUEST
    }
  }


  async update(id: string, updateIndividualBidDto: UpdateIndividualBidDto) {
    if(Object.keys(updateIndividualBidDto).length === 0){
      throw new HttpException('Empty Body is not allowed', HttpStatus.NOT_ACCEPTABLE);
    }
    const updateIndividualBid = await this.IndividualBidModel.findByIdAndUpdate(id, updateIndividualBidDto, { new: true })
    return {
      statusCode: HttpStatus.OK,
      message: 'IndividualBid Updated Successfully',
      data: updateIndividualBid,
    };
  }

  async remove(id: string) {
    try{
      const IndividualBidById = await this.IndividualBidModel.findOne({
        _id: id
      });
      if(!IndividualBidById){
        throw new HttpException('IndividualBid with this id not found', HttpStatus.NOT_FOUND);
      }
      //Deleting a IndividualBid
      await this.IndividualBidModel.findByIdAndRemove(id);
      return {
        statusCode: HttpStatus.OK,
        msg: 'IndividualBid deleted Successfully'
      };
    }catch (error) {
      throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
