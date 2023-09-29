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
exports.CreateProjectDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProjectDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { LCINumber: { required: true, type: () => String }, ProjectName: { required: true, type: () => String }, StreetAddress: { required: true, type: () => String }, CityState: { required: true, type: () => ({ City: { required: true, type: () => String }, State: { required: true, type: () => String } }) }, Country: { required: true, type: () => String }, UserId: { required: true, type: () => String }, MarketId: { required: true, type: () => String }, BuildingTypeId: { required: true, type: () => String }, ProjectCode: { required: true, type: () => String }, Owner: { required: true, type: () => String }, Estimator: { required: true, type: () => String }, TypeOfBid: { required: false, type: () => String }, BidDate: { required: false, type: () => String }, BidTime: { required: true, type: () => String }, SiteSize: { required: true, type: () => String }, ProjectSize: { required: true, type: () => ({ TotalArea: { required: true, type: () => String }, BuildingFootprint: { required: true, type: () => String }, NumberOfFloors: { required: true, type: () => String } }) }, ProjectTeam: { required: true, type: () => ({ Principal: { required: true, type: () => String }, ProjectManager: { required: true, type: () => String }, ProjectSuperintendent: { required: true, type: () => String }, Architect: { required: true, type: () => String }, Engineer: { required: true, type: () => String } }) }, GarageInformation: { required: true, type: () => ({ GarageGSF: { required: true, type: () => String }, NumberOfParkingSpots: { required: true, type: () => String }, SFPerStall: { required: true, type: () => String }, GarageRatio: { required: true, type: () => String } }) }, BidAmount: { required: true, type: () => String }, ContractAward: { required: true, type: () => String }, Schedule: { required: true, type: () => ({ startDate: { required: true, type: () => Date }, completionDate: { required: true, type: () => Date }, durationDays: { required: true, type: () => Object }, durationWeeks: { required: true, type: () => Object } }) } };
    }
}
exports.CreateProjectDto = CreateProjectDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "LCINumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "ProjectName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "StreetAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateProjectDto.prototype, "CityState", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "Country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "UserId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "MarketId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "BuildingTypeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "ProjectCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "Owner", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "Estimator", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "TypeOfBid", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "BidDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "BidTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "SiteSize", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateProjectDto.prototype, "ProjectSize", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateProjectDto.prototype, "ProjectTeam", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateProjectDto.prototype, "GarageInformation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "BidAmount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "ContractAward", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateProjectDto.prototype, "Schedule", void 0);
//# sourceMappingURL=CreateProject.dto.js.map