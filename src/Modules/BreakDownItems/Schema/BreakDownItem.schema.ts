import { DivisionCategory } from '../../DivisionCategory/Schemas/divisionCategory.schema';
import { Project } from '../../Projects/Schemas/project.schema';
import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
// import { Market } from '../../../Modules/Markets/Schemas/maket.schema';
// import { Market } from 'src/market/Schemas/maket.schema';

  export type BreakDownItemDocument = BreakDownItem & Document;
  
  @Schema({timestamps:true})
  export class BreakDownItem {
  
 
    //Foriegn Key
    @Prop({ 
      ref : DivisionCategory.name, 
      type : Types.ObjectId 
    })
    divisionCategoryId: DivisionCategory;

    @Prop({ 
        ref : Project.name, 
        type : Types.ObjectId 
      })
      projectId: Project;

    //other attributtes
    @Prop()
    BreakdownItemName:string

    @Prop()
    BreakdownItemQuantity:Number

    @Prop()
    BreakdownItemPerUnit:Number

    @Prop()
    BreakdownItemArea:string
    }
  
export const BreakDownItemSchema = SchemaFactory.createForClass(BreakDownItem);


// @Prop({ ref : 'Users', type : Types.ObjectId })
// likeeId: Users;