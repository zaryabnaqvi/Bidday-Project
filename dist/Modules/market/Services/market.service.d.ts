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
import { CreateMarketDto } from '../dto/create-market.dto';
import { UpdateMarketDto } from '../dto/update-market.dto';
import { Market } from '../Schemas/maket.schema';
import { Model, Types } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
export declare class MarketService {
    private marketModel;
    constructor(marketModel: Model<Market>);
    create(createMarketDto: CreateMarketDto): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, Market> & Market & {
            _id: Types.ObjectId;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, Market> & Market & {
            _id: Types.ObjectId;
        })[];
    }>;
    findOne(id: string | Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, Market> & Market & {
        _id: Types.ObjectId;
    }>;
    update(id: string | Types.ObjectId, updateMarketDto: UpdateMarketDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, Market> & Market & {
            _id: Types.ObjectId;
        };
    }>;
    remove(id: string | Types.ObjectId): Promise<{
        statusCode: HttpStatus;
        msg: string;
    }>;
    AddProjectCodeToMarket(MarketId: string | Types.ObjectId, newProjectCode: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").UpdateWriteOpResult;
    }>;
    RemoveProjectCodeToMarket(MarketId: string | Types.ObjectId, newProjectCode: Types.ObjectId | string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").UpdateWriteOpResult;
    }>;
}
