
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { type } from 'os';
import { Market, MarketSchema } from 'src/Modules/market/Schemas/maket.schema';
// import { Market } from 'src/market/Schemas/maket.schema';

  export type ProjectCodeDocument = ProjectCode & Document;
  
  @Schema({timestamps:true})
  export class ProjectCode {
  
    @Prop({ 
      required: true, 
      unique: true, 
      trim: true, 
      lowercase: true ,
    })
    name: string;

    @Prop({type:Types.ObjectId,ref:"Markets"})
    MarketId:Types.ObjectId
 
  }
  
export const ProjectCodeSchema = SchemaFactory.createForClass(ProjectCode);

