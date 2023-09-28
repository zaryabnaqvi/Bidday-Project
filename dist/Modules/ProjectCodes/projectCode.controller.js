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
exports.ProjectCodeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const projectCode_service_1 = require("./Services/projectCode.service");
const CreateProjectCode_dto_1 = require("../ProjectCodes/DTO/CreateProjectCode.dto");
const UpdateProjectCode_dto_1 = require("../ProjectCodes/DTO/UpdateProjectCode.dto");
const swagger_1 = require("@nestjs/swagger");
let ProjectCodeController = class ProjectCodeController {
    constructor(projectCodeService) {
        this.projectCodeService = projectCodeService;
    }
    async create(createProjectCodeDto) {
        return await this.projectCodeService.create(createProjectCodeDto);
    }
    async findAll() {
        return await this.projectCodeService.findAll();
    }
    async getAll() {
        return await this.projectCodeService.findAllProjectCodesWithMarkets();
    }
    async findOne(id) {
        return await this.projectCodeService.findOne(id);
    }
    async findByMarketId(id) {
        return await this.projectCodeService.findByMarketId(id);
    }
    update(id, updateProjectCodeDto) {
        return this.projectCodeService.update(id, updateProjectCodeDto);
    }
    async remove(id) {
        return await this.projectCodeService.remove(id);
    }
};
exports.ProjectCodeController = ProjectCodeController;
__decorate([
    (0, common_1.Post)("/create"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProjectCode_dto_1.CreateProjectCodeDTO]),
    __metadata("design:returntype", Promise)
], ProjectCodeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectCodeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("getAllMarkets"),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectCodeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':projectCodeId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('projectCodeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectCodeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('byMarket/:marketId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('marketId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectCodeController.prototype, "findByMarketId", null);
__decorate([
    (0, common_1.Patch)('updateProjectCode/:projectCodeId'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('projectCodeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateProjectCode_dto_1.UpdateProjectCodeDTO]),
    __metadata("design:returntype", void 0)
], ProjectCodeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteProjectCode/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectCodeController.prototype, "remove", null);
exports.ProjectCodeController = ProjectCodeController = __decorate([
    (0, common_1.Controller)('projectCodes'),
    (0, swagger_1.ApiTags)('ProjectCodes'),
    __metadata("design:paramtypes", [projectCode_service_1.ProjectCodeService])
], ProjectCodeController);
//# sourceMappingURL=projectCode.controller.js.map