
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
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

   
 
  }
  
export const ProjectCodeSchema = SchemaFactory.createForClass(ProjectCode);

