import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BuildingType } from 'src/Modules/BuildingTypes/Schemas/buildingType.schema';
import { Market } from 'src/Modules/Markets/Schemas/maket.schema';
import { ProjectCode } from 'src/Modules/ProjectCodes/Schemas/projectCode.schema';
import { Users } from '@app/src/Modules/User/schema/user.schema';

@Schema({timestamps:true})
export class Project {
  @Prop({ required: true })
  LCINumber: string;

  @Prop({ required: true })
  ProjectName: string;

  @Prop({ required: true })
  StreetAddress: string;

  @Prop({ type:{
    City: String,
    State: String
  }})
  CityState: {
    City: string;
    State: string;
  };

  @Prop()
  Country: string;


  @Prop({  type:Types.ObjectId,ref:Users.name})
  UserId:Users

  @Prop({ type:Types.ObjectId,ref:Market.name})
  MarketId: Market;

  @Prop({ type:Types.ObjectId,ref:BuildingType.name})
  BuildingTypeId: BuildingType;

  @Prop({ type:Types.ObjectId,ref:ProjectCode.name})
  ProjectCodeId: ProjectCode;

  @Prop()
  Owner: string;

  @Prop()
  Estimator: string;

  @Prop()
  TypeOfBid: string;

  @Prop()
  BidDate: string;

  @Prop()
  BidTime: string;

  @Prop()
  SiteSize: string;

  @Prop({type:{
    TotalArea: String,
    BuildingFootprint: String,
    NumberOfFloors: String
  }})
  ProjectSize: {
    TotalArea: string;
    BuildingFootprint: string;
    NumberOfFloors: string;
  };

  @Prop({type:
    {
        Principal: String,
        ProjectManager: String,
        ProjectSuperintendent: String,
        Architect: String,
        Engineer: String
      }
  })
  ProjectTeam: {
    Principal: string;
    ProjectManager: string;
    ProjectSuperintendent: string;
    Architect: string;
    Engineer: string;
  };

  @Prop({type:{
    GarageGSF: String,
    NumberOfParkingSpots: String,
    SFPerStall: String,
    GarageRatio: String,
  }
})
  GarageInformation: {
    GarageGSF: string;
    NumberOfParkingSpots: string;
    SFPerStall: string;
    GarageRatio: string;
  };

  @Prop()
  BidAmount: string;

  @Prop()
  ContractAward: string;

  @Prop()
  ProjectDescription: string;

  @Prop({ type: {
    startDate: Date,
    completionDate: Date,
    durationDays: Number,
    durationWeeks: Number,
  } })
  Schedule: {
    startDate: Date;
    completionDate: Date;
    durationDays: Number;
    durationWeeks: Number;
  };
 }



export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project)
