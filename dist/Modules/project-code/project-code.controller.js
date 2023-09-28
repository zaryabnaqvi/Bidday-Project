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
const common_1 = require("@nestjs/common");
const project_code_service_1 = require("./Services/project-code.service");
const create_project_code_dto_1 = require("./dto/create-project-code.dto");
const update_project_code_dto_1 = require("./dto/update-project-code.dto");
let ProjectCodeController = class ProjectCodeController {
    constructor(projectCodeService) {
        this.projectCodeService = projectCodeService;
    }
    create(MarketId, createProjectCodeDto) {
        return this.projectCodeService.create(MarketId, createProjectCodeDto);
    }
    update(id, updateProjectCodeDto, MarketId) {
        return this.projectCodeService.update(MarketId, id, updateProjectCodeDto);
    }
    remove(id, MarketId) {
        return this.projectCodeService.remove(id, MarketId);
    }
};
exports.ProjectCodeController = ProjectCodeController;
__decorate([
    (0, common_1.Post)("/create/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_project_code_dto_1.CreateProjectCodeDto]),
    __metadata("design:returntype", void 0)
], ProjectCodeController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('updateProjectCode/:id/:marketId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('marketId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_code_dto_1.UpdateProjectCodeDto, String]),
    __metadata("design:returntype", void 0)
], ProjectCodeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteProjectCode/:Marketid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)("Marketid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProjectCodeController.prototype, "remove", null);
exports.ProjectCodeController = ProjectCodeController = __decorate([
    (0, common_1.Controller)('project-code'),
    __metadata("design:paramtypes", [project_code_service_1.ProjectCodeService])
], ProjectCodeController);
//# sourceMappingURL=project-code.controller.js.map