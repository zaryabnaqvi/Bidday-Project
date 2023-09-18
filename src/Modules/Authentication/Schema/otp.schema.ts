
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import {
    Document
  } from 'mongoose';
  
  export type OtpDocument = Otp & Document;
  
  @Schema()
  export class Otp {
  
    @Prop()
    email: string;
  
    @Prop()
    code: string;
  
    @Prop()
    expiry: Date;
  
    @Prop()
    contact: string;

    @Prop()
    createdAt: Date;

    @Prop()
    UpdatedAt:Date


  }
  
  export const OtpSchema = SchemaFactory.createForClass(Otp);





