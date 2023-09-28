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
import { MarketService } from './Services/market.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { Types } from 'mongoose';
export declare class MarketController {
    private readonly marketService;
    constructor(marketService: MarketService);
    create(createMarketDto: CreateMarketDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./Schemas/maket.schema").Market> & import("./Schemas/maket.schema").Market & {
            _id: Types.ObjectId;
        };
    }>;
    findAll(): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, import("./Schemas/maket.schema").Market> & import("./Schemas/maket.schema").Market & {
            _id: Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./Schemas/maket.schema").Market> & import("./Schemas/maket.schema").Market & {
        _id: Types.ObjectId;
    }>;
    update(id: string, updateMarketDto: UpdateMarketDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./Schemas/maket.schema").Market> & import("./Schemas/maket.schema").Market & {
            _id: Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
