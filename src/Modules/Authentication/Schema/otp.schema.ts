
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import { Document } from 'mongoose';

  export type OtpDocument = Otp & Document;
  
  @Schema()
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

    @Prop({ select: false })
    createdAt: Date;

    @Prop({ select: false })
    updatedAt:Date
  }
  
export const OtpSchema = SchemaFactory.createForClass(Otp);

