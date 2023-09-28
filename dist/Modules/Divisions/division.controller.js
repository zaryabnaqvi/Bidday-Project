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
exports.DivisionController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const division_service_1 = require("./Services/division.service");
const UpdateDivision_dto_1 = require("./DTO/UpdateDivision.dto");
const CreateDivision_dto_1 = require("./DTO/CreateDivision.dto");
const swagger_1 = require("@nestjs/swagger");
let DivisionController = class DivisionController {
    constructor(divisionService) {
        this.divisionService = divisionService;
    }
    async fetchDivisions() {
        const result = await this.divisionService.fetchDivisions();
        return result;
    }
    async fetchDivisionById(id) {
        const result = await this.divisionService.fetchDivisionById(id);
        return result;
    }
    async createDivision(CreateDivisionDto) {
        const result = await this.divisionService.createDivision(CreateDivisionDto);
        return result;
    }
    async updateDivision(divisionId, divisionBody) {
        console.log(divisionId);
        if (Object.keys(divisionBody).length === 0) {
            throw new common_1.HttpException('Empty Body request is not allowed', common_1.HttpStatus.BAD_REQUEST);
        }
        const result = await this.divisionService.updateDivision(divisionId, divisionBody);
        return result;
    }
    async deleteDivision(divisionId) {
        console.log(divisionId);
        const result = await this.divisionService.deleteDivision(divisionId);
        return result;
    }
};
exports.DivisionController = DivisionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DivisionController.prototype, "fetchDivisions", null);
__decorate([
    (0, common_1.Get)(':divisionId'),
    __param(0, (0, common_1.Param)('divisionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DivisionController.prototype, "fetchDivisionById", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDivision_dto_1.createDivisionDTO]),
    __metadata("design:returntype", Promise)
], DivisionController.prototype, "createDivision", null);
__decorate([
    (0, common_1.Patch)('update/:divisionId'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('divisionId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateDivision_dto_1.updateDivisionDTO]),
    __metadata("design:returntype", Promise)
], DivisionController.prototype, "updateDivision", null);
__decorate([
    (0, common_1.Delete)('delete/:divisionId'),
    __param(0, (0, common_1.Param)('divisionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DivisionController.prototype, "deleteDivision", null);
exports.DivisionController = DivisionController = __decorate([
    (0, common_2.Controller)('divisions'),
    (0, swagger_1.ApiTags)('Divisions'),
    __metadata("design:paramtypes", [division_service_1.DivisionService])
], DivisionController);
//# sourceMappingURL=division.controller.js.map