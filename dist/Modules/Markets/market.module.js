"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketModule = void 0;
const common_1 = require("@nestjs/common");
const market_service_1 = require("./Services/market.service");
const market_controller_1 = require("./market.controller");
const mongoose_1 = require("@nestjs/mongoose");
const maket_schema_1 = require("./Schemas/maket.schema");
let MarketModule = class MarketModule {
};
exports.MarketModule = MarketModule;
exports.MarketModule = MarketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: "Market",
                    schema: maket_schema_1.MarketSchema
                }
            ]),
        ],
        controllers: [market_controller_1.MarketController],
        providers: [market_service_1.MarketService],
        exports: [market_service_1.MarketService]
    })
], MarketModule);
//# sourceMappingURL=market.module.js.map