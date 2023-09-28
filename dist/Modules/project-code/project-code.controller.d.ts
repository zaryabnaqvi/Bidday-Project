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
import { ProjectCodeService } from './Services/project-code.service';
import { CreateProjectCodeDto } from './dto/create-project-code.dto';
import { UpdateProjectCodeDto } from './dto/update-project-code.dto';
import { Types } from 'mongoose';
export declare class ProjectCodeController {
    private readonly projectCodeService;
    constructor(projectCodeService: ProjectCodeService);
    create(MarketId: string | Types.ObjectId, createProjectCodeDto: CreateProjectCodeDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./Schemas/project-code.schema").ProjectCode> & import("./Schemas/project-code.schema").ProjectCode & {
            _id: Types.ObjectId;
        };
    }>;
    update(id: string, updateProjectCodeDto: UpdateProjectCodeDto, MarketId: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./Schemas/project-code.schema").ProjectCode> & import("./Schemas/project-code.schema").ProjectCode & {
            _id: Types.ObjectId;
        };
    }>;
    remove(id: string | Types.ObjectId, MarketId: string | Types.ObjectId): Promise<void>;
}
