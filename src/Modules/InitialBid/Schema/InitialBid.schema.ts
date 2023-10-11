
import { Bidders } from '../../../Modules/Bidders/Schema/bidder.schema';
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Project } from '../../../Modules/Projects/Schemas/project.schema';
import { DivisionCategory } from '../../../Modules/divisionCategory/Schemas/divisionCategory.schema';

  export type InitialBidDocument = InitialBid & Document;
  
  @Schema({timestamps:true})
  export class InitialBid {
  
    @Prop({ 
      required: true, 
      unique: true, 
      trim: true, 
      lowercase: true 
    })
    amount: Number;

    @Prop({type:Types.ObjectId,ref:Bidders.name})
    biddersId:Bidders;
    
    @Prop({type:Types.ObjectId,ref:DivisionCategory.name})
    divisionCategoryId:DivisionCategory;

    @Prop({type:Types.ObjectId,ref:Project.name})
    projectId:Project;
  }
  
  export const InitialBidSchema = SchemaFactory.createForClass(InitialBid);