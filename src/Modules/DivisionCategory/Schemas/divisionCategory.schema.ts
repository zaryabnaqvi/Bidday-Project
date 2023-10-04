import { Divisions } from '@app/Modules/Divisions/Schema/division.schema';
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
  export class DivisionCategory extends Document{
  
    @Prop({ 
      required: true, 
      type:Types.ObjectId,
      ref:Divisions.name
    })
    divisionId: Divisions;
  
    @Prop({ 
      required: true, 
    })
    divisionCategoryName: string;
  }
  
  export const DivisionCategorySchema = SchemaFactory.createForClass(DivisionCategory);