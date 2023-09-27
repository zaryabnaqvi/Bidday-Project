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
  export class BuildingType extends Document{
  
    @Prop({ 
      required: true, 
    })
    BuildingTypeName: string;
  }
  
  export const BuildingTypeSchema = SchemaFactory.createForClass(BuildingType);
  
  
  
  