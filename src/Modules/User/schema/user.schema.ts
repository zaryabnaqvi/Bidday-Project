import { 
  Prop, 
  Schema, 
  SchemaFactory 
} from '@nestjs/mongoose';
import { 
  Document,
  Schema as NewSchema,
  Types 
} from 'mongoose';
import { Roles } from '../../../Utilities/Template/types';
export type UsersDocument = Users & Document;
@Schema({ timestamps: true })
export class Users {

  @Prop({ 
    required: true, 
    minlength: 2, 
    maxlength: 50 
  })
  fullName: string;

  @Prop({ 
    required: true, 
    unique: true, 
    trim: true, 
    lowercase: true 
  })
  email: string;

  @Prop({ 
    required: true, 
    minlength: 6 
  }) // Adjust minlength as needed
  password: string;

  @Prop({
    required: true,
    default: Roles.Estimator    
  })
  role: Roles;
}



export const UsersSchema = SchemaFactory.createForClass(Users);


//Referencing will be perform like this..............

  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Songs' }] })
  // songs: Songs[];

  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Images' }] })
  // images: Images[];

  // // @Prop({ type: [{ type: Types.ObjectId, ref: 'Artist' }] })
  // // spotifyArtist: Artist[];
  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Artist' }] })
  // artist: Types.ObjectId[];

  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Genre' }] })
//   // genre: Types.ObjectId[];
//   import {
//     Prop,
//     Schema,
//     SchemaFactory
//   } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

//   export type OtpDocument = Otp & Document;
  
//   @Schema({ timestamps: true })
//   export class Otp {
  
//     @Prop({ 
//       required: true, 
//       unique: true, 
//       trim: true, 
//       lowercase: true 
//     })
//     email: string;
  
//     @Prop()
//     code: string;
  
//     @Prop()
//     expiry: Date;
//   }
  
// export const OtpSchema = SchemaFactory.createForClass(Otp);