import { DivisionCategory } from '@app/Modules/DivisionCategory/Schemas/divisionCategory.schema';
import { Project } from '@app/Modules/Projects/Schemas/project.schema';
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

    @Prop({required:true,ref:DivisionCategory.name,type:Types.ObjectId})
    divisionCategoryId:DivisionCategory
    @Prop({required:true,ref:Project.name,type:Types.ObjectId})
    projectId:Project
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
  