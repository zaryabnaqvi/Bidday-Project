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
import { CreateProjectCodeDto } from '../dto/create-project-code.dto';
import { UpdateProjectCodeDto } from '../dto/update-project-code.dto';
import { Model, Types } from 'mongoose';
import { ProjectCode } from '../Schemas/project-code.schema';
import { HttpStatus } from '@nestjs/common/enums';
import { MarketService } from 'src/Modules/market/Services/market.service';
export declare class ProjectCodeService {
    private projectCodeModel;
    private readonly marketService;
    constructor(projectCodeModel: Model<ProjectCode>, marketService: MarketService);
    create(MarketId: string | Types.ObjectId, createProjectCodeDto: CreateProjectCodeDto): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, ProjectCode> & ProjectCode & {
            _id: Types.ObjectId;
        };
    }>;
    update(MarketId: string, id: string | Types.ObjectId, updateProjectCodeDto: UpdateProjectCodeDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, ProjectCode> & ProjectCode & {
            _id: Types.ObjectId;
        };
    }>;
    remove(id: string | Types.ObjectId, MarketId: string | Types.ObjectId): Promise<void>;
}
