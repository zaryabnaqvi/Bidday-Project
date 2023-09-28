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
const building_types_service_1 = require("./Services/building-types.service");
const create_building_type_dto_1 = require("./dto/create-building-type.dto");
const update_building_type_dto_1 = require("./dto/update-building-type.dto");
let BuildingTypesController = class BuildingTypesController {
    constructor(buildingTypesService) {
        this.buildingTypesService = buildingTypesService;
    }
    create(createBuildingTypeDto) {
        return this.buildingTypesService.create(createBuildingTypeDto);
    }
    findAll() {
        return this.buildingTypesService.findAll();
    }
    findOne(id) {
        return this.buildingTypesService.findOne(id);
    }
    update(id, updateBuildingTypeDto) {
        return this.buildingTypesService.update(id, updateBuildingTypeDto);
    }
    remove(id) {
        return this.buildingTypesService.remove(id);
    }
};
exports.BuildingTypesController = BuildingTypesController;
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_building_type_dto_1.CreateBuildingTypeDTO]),
    __metadata("design:returntype", void 0)
], BuildingTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("getBuildingTypes"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildingTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getBuildingType/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_building_type_dto_1.UpdateBuildingTypeDTO]),
    __metadata("design:returntype", void 0)
], BuildingTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingTypesController.prototype, "remove", null);
exports.BuildingTypesController = BuildingTypesController = __decorate([
    (0, common_1.Controller)('building-types'),
    __metadata("design:paramtypes", [building_types_service_1.BuildingTypesService])
], BuildingTypesController);
//# sourceMappingURL=building-types.controller.js.map