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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema = exports.Project = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const buildingType_schema_1 = require("src/Modules/BuildingTypes/Schemas/buildingType.schema");
const maket_schema_1 = require("src/Modules/Markets/Schemas/maket.schema");
const projectCode_schema_1 = require("src/Modules/ProjectCodes/Schemas/projectCode.schema");
const user_schema_1 = require("src/Modules/User/schema/user.schema");
let Project = class Project {
};
exports.Project = Project;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Project.prototype, "LCINumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Project.prototype, "ProjectName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Project.prototype, "StreetAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: {
            City: String,
            State: String
        } }),
    __metadata("design:type", Object)
], Project.prototype, "CityState", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "Country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: user_schema_1.Users.name }),
    __metadata("design:type", typeof (_a = typeof user_schema_1.Users !== "undefined" && user_schema_1.Users) === "function" ? _a : Object)
], Project.prototype, "UserId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: maket_schema_1.Market.name }),
    __metadata("design:type", typeof (_b = typeof maket_schema_1.Market !== "undefined" && maket_schema_1.Market) === "function" ? _b : Object)
], Project.prototype, "MarketId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: buildingType_schema_1.BuildingType.name }),
    __metadata("design:type", typeof (_c = typeof buildingType_schema_1.BuildingType !== "undefined" && buildingType_schema_1.BuildingType) === "function" ? _c : Object)
], Project.prototype, "BuildingTypeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: projectCode_schema_1.ProjectCode.name }),
    __metadata("design:type", typeof (_d = typeof projectCode_schema_1.ProjectCode !== "undefined" && projectCode_schema_1.ProjectCode) === "function" ? _d : Object)
], Project.prototype, "ProjectCodeId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "Owner", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "Estimator", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "TypeOfBid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "BidDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "BidTime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "SiteSize", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: {
            TotalArea: String,
            BuildingFootprint: String,
            NumberOfFloors: String
        } }),
    __metadata("design:type", Object)
], Project.prototype, "ProjectSize", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: {
            Principal: String,
            ProjectManager: String,
            ProjectSuperintendent: String,
            Architect: String,
            Engineer: String
        }
    }),
    __metadata("design:type", Object)
], Project.prototype, "ProjectTeam", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: {
            GarageGSF: String,
            NumberOfParkingSpots: String,
            SFPerStall: String,
            GarageRatio: String,
        }
    }),
    __metadata("design:type", Object)
], Project.prototype, "GarageInformation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "BidAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "ContractAward", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "ProjectDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: {
            startDate: Date,
            completionDate: Date,
            durationDays: Number,
            durationWeeks: Number,
        } }),
    __metadata("design:type", Object)
], Project.prototype, "Schedule", void 0);
exports.Project = Project = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Project);
exports.ProjectSchema = mongoose_1.SchemaFactory.createForClass(Project);
//# sourceMappingURL=project.schema.js.map