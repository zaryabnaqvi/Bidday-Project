/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
import { BuildingType } from 'src/Modules/BuildingTypes/Schemas/buildingType.schema';
import { Market } from 'src/Modules/Markets/Schemas/maket.schema';
import { ProjectCode } from 'src/Modules/ProjectCodes/Schemas/projectCode.schema';
import { Users } from 'src/Modules/User/schema/user.schema';
export declare class Project {
    LCINumber: string;
    ProjectName: string;
    StreetAddress: string;
    CityState: {
        City: string;
        State: string;
    };
    Country: string;
    UserId: Users;
    MarketId: Market;
    BuildingTypeId: BuildingType;
    ProjectCodeId: ProjectCode;
    Owner: string;
    Estimator: string;
    TypeOfBid: string;
    BidDate: string;
    BidTime: string;
    SiteSize: string;
    ProjectSize: {
        TotalArea: string;
        BuildingFootprint: string;
        NumberOfFloors: string;
    };
    ProjectTeam: {
        Principal: string;
        ProjectManager: string;
        ProjectSuperintendent: string;
        Architect: string;
        Engineer: string;
    };
    GarageInformation: {
        GarageGSF: string;
        NumberOfParkingSpots: string;
        SFPerStall: string;
        GarageRatio: string;
    };
    BidAmount: string;
    ContractAward: string;
    ProjectDescription: string;
    Schedule: {
        startDate: Date;
        completionDate: Date;
        durationDays: Number;
        durationWeeks: Number;
    };
}
export type ProjectDocument = Project & Document;
export declare const ProjectSchema: import("mongoose").Schema<Project, import("mongoose").Model<Project, any, any, any, Document<unknown, any, Project> & Project & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Project, Document<unknown, {}, Project> & Project & {
    _id: Types.ObjectId;
}>;
