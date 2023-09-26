
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
  }

export const MarketSchema = SchemaFactory.createForClass(Market);