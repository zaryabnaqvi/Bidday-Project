
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { ProjectCode } from 'src/Modules/project-code/Schemas/project-code.schema';

  export type MarketDocument = Market & Document;
  
  @Schema({timestamps:true})
  export class Market {
  
    @Prop({ 
      required: true, 
      unique: true, 
      trim: true, 
      lowercase: true 
    })
    name: string;


  @Prop({type: Types.ObjectId ,default:[], ref:ProjectCode.name })
  ProjectCodeIds:Types.ObjectId[]
  }

     
  
  
export const MarketSchema = SchemaFactory.createForClass(Market);

