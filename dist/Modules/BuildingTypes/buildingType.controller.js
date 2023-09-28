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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingTypesController = void 0;
const common_1 = require("@nestjs/common");
const buildingType_service_1 = require("./Services/buildingType.service");
const CreateBuildingType_dto_1 = require("./DTO/CreateBuildingType.dto");
const UpdateBuildingType_dto_1 = require("./DTO/UpdateBuildingType.dto");
const swagger_1 = require("@nestjs/swagger");
let BuildingTypesController = class BuildingTypesController {
    constructor(buildingTypesService) {
        this.buildingTypesService = buildingTypesService;
    }
    async create(createBuildingTypeDto) {
        return await this.buildingTypesService.create(createBuildingTypeDto);
    }
    async findAll() {
        return await this.buildingTypesService.findAll();
    }
    async findOne(id) {
        return await this.buildingTypesService.findOne(id);
    }
    async update(id, updateBuildingTypeDto) {
        return await this.buildingTypesService.update(id, updateBuildingTypeDto);
    }
    async remove(id) {
        return await this.buildingTypesService.remove(id);
    }
};
exports.BuildingTypesController = BuildingTypesController;
__decorate([
    (0, common_1.Post)("create"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBuildingType_dto_1.CreateBuildingTypeDTO]),
    __metadata("design:returntype", Promise)
], BuildingTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("getBuildingTypes"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BuildingTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getBuildingType/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BuildingTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBuildingType_dto_1.UpdateBuildingTypeDTO]),
    __metadata("design:returntype", Promise)
], BuildingTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BuildingTypesController.prototype, "remove", null);
exports.BuildingTypesController = BuildingTypesController = __decorate([
    (0, common_1.Controller)('buildingTypes'),
    (0, swagger_1.ApiTags)('BuildingTypes'),
    __metadata("design:paramtypes", [buildingType_service_1.BuildingTypesService])
], BuildingTypesController);
//# sourceMappingURL=buildingType.controller.js.map