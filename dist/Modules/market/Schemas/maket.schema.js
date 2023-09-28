"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketSchema = exports.Market = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const project_code_schema_1 = require("../../project-code/Schemas/project-code.schema");
let Market = class Market {
};
exports.Market = Market;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }),
    __metadata("design:type", String)
], Market.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, default: [], ref: project_code_schema_1.ProjectCode.name }),
    __metadata("design:type", Array)
], Market.prototype, "ProjectCodeIds", void 0);
exports.Market = Market = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Market);
exports.MarketSchema = mongoose_1.SchemaFactory.createForClass(Market);
//# sourceMappingURL=maket.schema.js.map