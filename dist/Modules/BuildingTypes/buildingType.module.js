"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingTypesModule = void 0;
const common_1 = require("@nestjs/common");
const buildingType_service_1 = require("./Services/buildingType.service");
const buildingType_controller_1 = require("./buildingType.controller");
const mongoose_1 = require("@nestjs/mongoose");
const buildingType_schema_1 = require("./Schemas/buildingType.schema");
let BuildingTypesModule = class BuildingTypesModule {
};
exports.BuildingTypesModule = BuildingTypesModule;
exports.BuildingTypesModule = BuildingTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: buildingType_schema_1.BuildingType.name,
                    schema: buildingType_schema_1.BuildingTypeSchema
                }
            ])
        ],
        controllers: [buildingType_controller_1.BuildingTypesController],
        providers: [buildingType_service_1.BuildingTypesService],
    })
], BuildingTypesModule);
//# sourceMappingURL=buildingType.module.js.map