
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { type } from 'os';
import { Market } from 'src/Modules/Markets/Schemas/maket.schema';
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
 
    //Foriegn Key
    @Prop({ 
      ref : 'Market', 
      type : Types.ObjectId 
    })
    marketId: Market;
  }
  
export const ProjectCodeSchema = SchemaFactory.createForClass(ProjectCode);


// @Prop({ ref : 'Users', type : Types.ObjectId })
// likeeId: Users;