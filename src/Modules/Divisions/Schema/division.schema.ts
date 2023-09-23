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
  
  @Schema()
  export class Divisions extends Document{
  
    @Prop({ 
      required: true, 
    })
    divisionNumber: string;
  
    @Prop({ 
      required: true, 
    })
    divisionName: string;
  
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
  
  export const DivisionsSchema = SchemaFactory.createForClass(Divisions);
  
  
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
  