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
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { Divisions } from '../Schema/division.schema';
import { updateDivisionDTO } from '../DTO/UpdateDivision.dto';
import { createDivisionDTO } from '../DTO/CreateDivision.dto';
export declare class DivisionService {
    private readonly divisionModel;
    constructor(divisionModel: Model<Divisions>);
    fetchDivisions(): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, Divisions> & Divisions & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    fetchDivisionById(id: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, Divisions> & Divisions & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    createDivision(createDivisionBody: createDivisionDTO): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, Divisions> & Divisions & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateDivision(id: string, divisionBody: updateDivisionDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, Divisions> & Divisions & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteDivision(id: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
    }>;
}
