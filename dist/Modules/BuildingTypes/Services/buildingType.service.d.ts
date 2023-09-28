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
import { CreateBuildingTypeDTO } from '../DTO/CreateBuildingType.dto';
import { UpdateBuildingTypeDTO } from '../DTO/UpdateBuildingType.dto';
import { BuildingType } from '../Schemas/buildingType.schema';
import { Model } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
export declare class BuildingTypesService {
    private BuildingTypeModel;
    constructor(BuildingTypeModel: Model<BuildingType>);
    create(createBuildingTypeDto: CreateBuildingTypeDTO): Promise<import("mongoose").Document<unknown, {}, BuildingType> & BuildingType & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, BuildingType> & BuildingType & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, BuildingType> & BuildingType & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateBuildingTypeDto: UpdateBuildingTypeDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, BuildingType> & BuildingType & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
    }>;
}
