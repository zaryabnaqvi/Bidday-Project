import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import {
    Document
  } from 'mongoose';
  
  export type UserDocument = User & Document;
  
  @Schema()
  export class User {
    @Prop()
    firstname: string;
  
    @Prop()
    lastname: string;
  
    @Prop()
    email: string;
  
    @Prop()
    age: string;
  
    @Prop()
    password: string;
  
    @Prop() 
    contact: string;
  }
  
  export const UserSchema = SchemaFactory.createForClass(User);