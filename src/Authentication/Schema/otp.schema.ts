
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import { Document } from 'mongoose';

  export type OtpDocument = Otp & Document;
  
  @Schema({ timestamps: true })
  export class Otp {
  
    @Prop({ 
      required: true, 
      unique: true, 
      trim: true, 
      lowercase: true 
    })
    email: string;
  
    @Prop()
    code: string;
  
    @Prop()
    expiry: Date;
  }
  
export const OtpSchema = SchemaFactory.createForClass(Otp);

