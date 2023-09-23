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
import { Roles } from 'src/Utilities/Template/types';

@Schema()
export class Users extends Document{

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

  @Prop({ 
    select: false, // Exclude from query results
    default: Date.now,
  })
  createdAt: Date;

  @Prop({ 
    select: false, // Exclude from query results
    default: Date.now,
  })
  updatedAt: Date;
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
  // genre: Types.ObjectId[];
