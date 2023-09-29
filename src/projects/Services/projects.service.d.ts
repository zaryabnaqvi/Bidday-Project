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
import { Model, Types } from 'mongoose';
import { Project } from '../Schemas/project.schema';
import { CreateProjectDto } from '../DTO/CreateProject.dto';
import { UpdateProjectDto } from '../DTO/UpdateProject.dto';
export declare class ProjectsService {
    private projectModel;
    constructor(projectModel: Model<Project>);
    create(createProjectDto: CreateProjectDto): Promise<{
        statusCode: number;
        message: string;
        data: import("mongoose").Document<unknown, {}, Project> & Project & {
            _id: Types.ObjectId;
        };
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: (import("mongoose").Document<unknown, {}, Project> & Project & {
            _id: Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: import("mongoose").Document<unknown, {}, Project> & Project & {
            _id: Types.ObjectId;
        };
    }>;
    getUsersProject(id: Types.ObjectId | string): Promise<{
        statusCode: number;
        message: string;
        data: (import("mongoose").Document<unknown, {}, Project> & Project & {
            _id: Types.ObjectId;
        })[];
    }>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<{
        statusCode: number;
        message: string;
        data: import("mongoose").Document<unknown, {}, Project> & Project & {
            _id: Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
    }>;
}
