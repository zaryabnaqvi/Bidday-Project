"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCodeModule = void 0;
const common_1 = require("@nestjs/common");
const projectCode_service_1 = require("./Services/projectCode.service");
const projectCode_controller_1 = require("./projectCode.controller");
const mongoose_1 = require("@nestjs/mongoose");
const projectCode_schema_1 = require("./Schemas/projectCode.schema");
const market_module_1 = require("../Markets/market.module");
const maket_schema_1 = require("../Markets/Schemas/maket.schema");
let ProjectCodeModule = class ProjectCodeModule {
};
exports.ProjectCodeModule = ProjectCodeModule;
exports.ProjectCodeModule = ProjectCodeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: projectCode_schema_1.ProjectCode.name,
                    schema: projectCode_schema_1.ProjectCodeSchema
                },
                {
                    name: maket_schema_1.Market.name,
                    schema: maket_schema_1.MarketSchema
                },
            ]),
            market_module_1.MarketModule
        ],
        controllers: [projectCode_controller_1.ProjectCodeController],
        providers: [projectCode_service_1.ProjectCodeService],
    })
], ProjectCodeModule);
//# sourceMappingURL=projectCode.module.js.map