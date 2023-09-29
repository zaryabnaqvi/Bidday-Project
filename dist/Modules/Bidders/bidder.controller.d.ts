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
import { BidderService } from './Services/bidder.service';
import { createBidderDTO } from './DTO/CreateBidder.dto';
import { updateBidderDTO } from './DTO/UpdateBidder.dto';
export declare class BidderController {
    private bidderService;
    constructor(bidderService: BidderService);
    fetchBidder(): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, import("./Schema/bidder.schema").Bidders> & import("./Schema/bidder.schema").Bidders & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    fetchBidderById(id: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./Schema/bidder.schema").Bidders> & import("./Schema/bidder.schema").Bidders & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    createBidder(CreateBidderDto: createBidderDTO): Promise<{
        statusCode: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./Schema/bidder.schema").Bidders> & import("./Schema/bidder.schema").Bidders & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateBidder(bidderId: string, bidderBody: updateBidderDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./Schema/bidder.schema").Bidders> & import("./Schema/bidder.schema").Bidders & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteBidder(bidderId: string): Promise<{
        statusCode: HttpStatus;
        msg: string;
    }>;
}
