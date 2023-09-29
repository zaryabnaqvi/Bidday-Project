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
import { ProjectCodeService } from './Services/projectCode.service';
import { CreateProjectCodeDTO } from '../ProjectCodes/DTO/CreateProjectCode.dto';
import { UpdateProjectCodeDTO } from '../ProjectCodes/DTO/UpdateProjectCode.dto';
export declare class ProjectCodeController {
    private readonly projectCodeService;
    constructor(projectCodeService: ProjectCodeService);
    create(createProjectCodeDto: CreateProjectCodeDTO): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./Schemas/projectCode.schema").ProjectCode> & import("./Schemas/projectCode.schema").ProjectCode & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findAll(): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, import("./Schemas/projectCode.schema").ProjectCode> & import("./Schemas/projectCode.schema").ProjectCode & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getAll(): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: any;
    }>;
    findOne(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./Schemas/projectCode.schema").ProjectCode> & import("./Schemas/projectCode.schema").ProjectCode & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findByMarketId(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, import("./Schemas/projectCode.schema").ProjectCode> & import("./Schemas/projectCode.schema").ProjectCode & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    update(id: string, updateProjectCodeDto: UpdateProjectCodeDTO): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./Schemas/projectCode.schema").ProjectCode> & import("./Schemas/projectCode.schema").ProjectCode & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
