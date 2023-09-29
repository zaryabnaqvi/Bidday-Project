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
import { UserService } from './Services/user.service';
import { usersByRoleDTO } from './DTO/UsersByRole.dto';
import { updateUserDTO } from './DTO/UpdateUser.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    fetchUsers(): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/user.schema").Users> & import("./schema/user.schema").Users & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    fetchUserById(id: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/user.schema").Users> & import("./schema/user.schema").Users & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    fetchUsersByRole(roleBody: usersByRoleDTO): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/user.schema").Users> & import("./schema/user.schema").Users & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    updateUser(userId: string, userBody: updateUserDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/user.schema").Users> & import("./schema/user.schema").Users & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteUser(userId: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
    }>;
}
