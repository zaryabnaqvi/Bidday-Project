"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidderModule = void 0;
const bidder_controller_1 = require("./bidder.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bidder_schema_1 = require("./Schema/bidder.schema");
const bidder_service_1 = require("./Services/bidder.service");
let BidderModule = class BidderModule {
};
exports.BidderModule = BidderModule;
exports.BidderModule = BidderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: bidder_schema_1.Bidders.name,
                    schema: bidder_schema_1.BiddersSchema
                },
            ])
        ],
        controllers: [bidder_controller_1.BidderController],
        providers: [bidder_service_1.BidderService],
        exports: [bidder_service_1.BidderService]
    })
], BidderModule);
//# sourceMappingURL=bidder.module.js.map