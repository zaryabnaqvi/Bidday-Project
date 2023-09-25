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
  
  @Schema({ timestamps: true })
  export class Bidders extends Document{
  
    @Prop({ 
      required: true, 
    })
    phoneNumber: string;
  
    @Prop({ 
      required: true, 
    })
    companyName: string;
  
    @Prop({ 
      required: true, 
    })
    contact: string;
  }
  
  export const BiddersSchema = SchemaFactory.createForClass(Bidders);
  
  
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
  