
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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