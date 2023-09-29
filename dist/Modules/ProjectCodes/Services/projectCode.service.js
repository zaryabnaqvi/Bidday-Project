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
const projectCode_schema_1 = require("../Schemas/projectCode.schema");
const mongoose_2 = require("@nestjs/mongoose");
const enums_1 = require("@nestjs/common/enums");
const exceptions_1 = require("@nestjs/common/exceptions");
const maket_schema_1 = require("../../Markets/Schemas/maket.schema");
let ProjectCodeService = class ProjectCodeService {
    constructor(projectCodeModel, marketModel) {
        this.projectCodeModel = projectCodeModel;
        this.marketModel = marketModel;
    }
    async create(createProjectCodeDto) {
        try {
            const { MarketId } = createProjectCodeDto;
            const isProjectCodeExist = await this.projectCodeModel.findOne({
                name: createProjectCodeDto.name,
                MarketId
            });
            if (isProjectCodeExist) {
                throw new exceptions_1.HttpException('ProjectCode is already exist', enums_1.HttpStatus.BAD_REQUEST);
            }
            const projectCode = {
                name: createProjectCodeDto.name,
                marketId: MarketId
            };
            const newProjectCode = new this.projectCodeModel(projectCode);
            const createdProjectCode = await newProjectCode.save();
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
    async findAll() {
        try {
            const projectCodes = await this.projectCodeModel.find();
            if (projectCodes.length === 0) {
                throw new exceptions_1.HttpException('Project Codes not found', enums_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: enums_1.HttpStatus.OK,
                msg: "Project Code Found Sucessfully",
                data: projectCodes
            };
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.message, error.status || enums_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const projectCodeById = await this.projectCodeModel.findById(id);
            if (!projectCodeById) {
                throw new exceptions_1.HttpException('Project Codes by Id not found', enums_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: enums_1.HttpStatus.OK,
                msg: "Project Code by Id Found Sucessfully",
                data: projectCodeById
            };
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.message, error.status || enums_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByMarketId(id) {
        try {
            const projectCodeByMarketId = await this.projectCodeModel.find({
                marketId: id
            });
            if (projectCodeByMarketId.length === 0) {
                throw new exceptions_1.HttpException('Project Codes by Market Id not found', enums_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: enums_1.HttpStatus.OK,
                msg: "Project Code by Market Id Found Sucessfully",
                data: projectCodeByMarketId
            };
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.message, error.status || enums_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updateProjectCodeDto) {
        try {
            if (Object.keys(updateProjectCodeDto).length === 0) {
                throw new exceptions_1.HttpException('Empty Body is not allowed', enums_1.HttpStatus.NOT_ACCEPTABLE);
            }
            if (updateProjectCodeDto.marketId) {
                const isMarketExist = await this.marketModel.findById(updateProjectCodeDto.marketId);
                if (!isMarketExist) {
                    throw new exceptions_1.HttpException('Market with this does not exist', enums_1.HttpStatus.NOT_FOUND);
                }
            }
            const updateProjectCode = updateProjectCodeDto;
            await this.projectCodeModel.findByIdAndUpdate(id, updateProjectCode);
            const updatedProjectCode = await this.projectCodeModel.findById(id);
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
    async remove(id) {
        try {
            await this.projectCodeModel.findByIdAndDelete(id);
            return {
                statusCode: enums_1.HttpStatus.OK,
                message: 'ProjectCode Deleted Successfully',
            };
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.message, error.status || enums_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAllProjectCodesWithMarkets() {
        let output = [];
        const markets = await this.marketModel.find();
        if (markets.length === 0) {
            throw new exceptions_1.HttpException('Project Codes not found', enums_1.HttpStatus.NOT_FOUND);
        }
        for (let i = 0; i < markets.length; i++) {
            const projectCodes = await this.projectCodeModel.find({
                marketId: markets[i]._id.toString()
            });
            let outputObject = {
                marketId: markets[i]._id,
                marketName: markets[i].name,
                marketProjectCodes: projectCodes
            };
            output.push(outputObject);
        }
        return {
            status: enums_1.HttpStatus.OK,
            message: output
        };
    }
};
exports.ProjectCodeService = ProjectCodeService;
exports.ProjectCodeService = ProjectCodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(projectCode_schema_1.ProjectCode.name)),
    __param(1, (0, mongoose_2.InjectModel)(maket_schema_1.Market.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], ProjectCodeService);
//# sourceMappingURL=projectCode.service.js.map