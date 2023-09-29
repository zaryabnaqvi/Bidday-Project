"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const division_controller_1 = require("./division.controller");
const division_schema_1 = require("./Schema/division.schema");
const division_service_1 = require("./Services/division.service");
let DivisionModule = class DivisionModule {
};
exports.DivisionModule = DivisionModule;
exports.DivisionModule = DivisionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: division_schema_1.Divisions.name,
                    schema: division_schema_1.DivisionsSchema
                },
            ])
        ],
        controllers: [division_controller_1.DivisionController],
        providers: [division_service_1.DivisionService],
        exports: [division_service_1.DivisionService]
    })
], DivisionModule);
//# sourceMappingURL=division.module.js.map