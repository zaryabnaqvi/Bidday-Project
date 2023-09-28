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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { HttpStatus } from '@nestjs/common';
import { DivisionService } from './Services/division.service';
import { updateDivisionDTO } from './DTO/UpdateDivision.dto';
import { createDivisionDTO } from './DTO/CreateDivision.dto';
export declare class DivisionController {
    private divisionService;
    constructor(divisionService: DivisionService);
    fetchDivisions(): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, import("./Schema/division.schema").Divisions> & import("./Schema/division.schema").Divisions & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    fetchDivisionById(id: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./Schema/division.schema").Divisions> & import("./Schema/division.schema").Divisions & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    createDivision(CreateDivisionDto: createDivisionDTO): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./Schema/division.schema").Divisions> & import("./Schema/division.schema").Divisions & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateDivision(divisionId: string, divisionBody: updateDivisionDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./Schema/division.schema").Divisions> & import("./Schema/division.schema").Divisions & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteDivision(divisionId: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
    }>;
}
