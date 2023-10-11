
import { BreakDownItem } from '@app/Modules/BreakDownItems/Schema/BreakDownItem.schema';
import { Bidders } from '../../Bidders/Schema/bidder.schema';
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
// import { BreakDownItem } from '../../BreakDownItems/Schemas/BreakDownItem.schema';
// import { DivisionCategory } from '../../divisionCategory/Schemas/divisionCategory.schema';

  export type IndividualBidDocument = IndividualBid & Document;
  
  @Schema({timestamps:true})
  export class IndividualBid {
  
    @Prop({ 
      required: true, 
      unique: true, 
      trim: true, 
      lowercase: true 
    })
    amount: Number;

    @Prop({type:Types.ObjectId,ref:Bidders.name})
    biddersId:Bidders;

    @Prop({type:Types.ObjectId,ref:BreakDownItem.name})
    breakDownItemId:BreakDownItem;
  }
  
  export const IndividualBidSchema = SchemaFactory.createForClass(IndividualBid);