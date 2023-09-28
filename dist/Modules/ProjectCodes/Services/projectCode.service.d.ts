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
import { CreateProjectCodeDTO } from '../DTO/CreateProjectCode.dto';
import { UpdateProjectCodeDTO } from '../DTO/UpdateProjectCode.dto';
import { Model, Types } from 'mongoose';
import { ProjectCode } from '../Schemas/projectCode.schema';
import { HttpStatus } from '@nestjs/common/enums';
import { Market } from 'src/Modules/Markets/Schemas/maket.schema';
export declare class ProjectCodeService {
    private projectCodeModel;
    private marketModel;
    constructor(projectCodeModel: Model<ProjectCode>, marketModel: Model<Market>);
    create(createProjectCodeDto: CreateProjectCodeDTO): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, ProjectCode> & ProjectCode & {
            _id: Types.ObjectId;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, ProjectCode> & ProjectCode & {
            _id: Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, ProjectCode> & ProjectCode & {
            _id: Types.ObjectId;
        };
    }>;
    findByMarketId(id: string | Types.ObjectId): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, ProjectCode> & ProjectCode & {
            _id: Types.ObjectId;
        })[];
    }>;
    update(id: string, updateProjectCodeDto: UpdateProjectCodeDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, ProjectCode> & ProjectCode & {
            _id: Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    findAllProjectCodesWithMarkets(): Promise<{
        status: HttpStatus;
        message: any;
    }>;
}
