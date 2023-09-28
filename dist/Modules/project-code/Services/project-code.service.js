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
exports.ProjectCodeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const project_code_schema_1 = require("../Schemas/project-code.schema");
const mongoose_2 = require("@nestjs/mongoose");
const enums_1 = require("@nestjs/common/enums");
const exceptions_1 = require("@nestjs/common/exceptions");
const market_service_1 = require("../../market/Services/market.service");
let ProjectCodeService = class ProjectCodeService {
    constructor(projectCodeModel, marketService) {
        this.projectCodeModel = projectCodeModel;
        this.marketService = marketService;
    }
    async create(MarketId, createProjectCodeDto) {
        try {
            const isProjectCodeExist = await this.projectCodeModel.findOne({
                name: createProjectCodeDto.name
            });
            if (isProjectCodeExist) {
                throw new exceptions_1.HttpException('ProjectCode is already exist', enums_1.HttpStatus.BAD_REQUEST);
            }
            const pc = {
                name: createProjectCodeDto.name,
                MarketId: MarketId
            };
            const newProjectCode = new this.projectCodeModel(pc);
            const createdProjectCode = await newProjectCode.save();
            this.marketService.AddProjectCodeToMarket(MarketId, createdProjectCode);
            return {
                statusCode: enums_1.HttpStatus.OK,
                msg: "Project Code added Sucessfully",
                data: createdProjectCode
            };
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.message, error.status || enums_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(MarketId, id, updateProjectCodeDto) {
        try {
            await this.marketService.RemoveProjectCodeToMarket(MarketId, id);
            await this.projectCodeModel.findByIdAndUpdate(id, updateProjectCodeDto);
            const updatedProjectCode = await this.projectCodeModel.findOne({
                _id: id
            });
            await this.marketService.AddProjectCodeToMarket(MarketId, updateProjectCodeDto);
            return {
                statusCode: enums_1.HttpStatus.OK,
                message: 'ProjectCode Data Updated Successfully',
                data: updatedProjectCode,
            };
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.message, error.status || enums_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id, MarketId) {
        try {
            this.marketService.RemoveProjectCodeToMarket(MarketId, id);
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.message, error.status || enums_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ProjectCodeService = ProjectCodeService;
exports.ProjectCodeService = ProjectCodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(project_code_schema_1.ProjectCode.name)),
    __metadata("design:paramtypes", [mongoose_1.Model, market_service_1.MarketService])
], ProjectCodeService);
//# sourceMappingURL=project-code.service.js.map