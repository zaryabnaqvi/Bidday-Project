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
exports.BuildingTypesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const buildingType_schema_1 = require("../Schemas/buildingType.schema");
const mongoose_2 = require("mongoose");
const common_2 = require("@nestjs/common");
let BuildingTypesService = class BuildingTypesService {
    constructor(BuildingTypeModel) {
        this.BuildingTypeModel = BuildingTypeModel;
    }
    async create(createBuildingTypeDto) {
        try {
            const BuildingTypeExist = await this.BuildingTypeModel.findOne({
                BuildingTypeName: createBuildingTypeDto.BuildingTypeName
            });
            if (BuildingTypeExist) {
                throw new common_2.HttpException('Building Type already exist', common_2.HttpStatus.NOT_ACCEPTABLE);
            }
            const newBuildingType = createBuildingTypeDto;
            const newBT = new this.BuildingTypeModel(newBuildingType);
            return await newBT.save();
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const buildingTypes = await this.BuildingTypeModel.find();
            if (buildingTypes.length === 0) {
                throw new common_2.HttpException('Building Type not found', common_2.HttpStatus.NOT_FOUND);
            }
            return buildingTypes;
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const buildingTypeById = await this.BuildingTypeModel.findOne({
                _id: id
            });
            if (!buildingTypeById) {
                throw new common_2.HttpException('Building Type by Id not found', common_2.HttpStatus.NOT_FOUND);
            }
            return buildingTypeById;
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updateBuildingTypeDto) {
        try {
            if (Object.keys(updateBuildingTypeDto).length === 0) {
                throw new common_2.HttpException('Empty Body is not allowed', common_2.HttpStatus.BAD_REQUEST);
            }
            await this.BuildingTypeModel.findByIdAndUpdate(id, updateBuildingTypeDto);
            const updatedBuidingTypeData = await this.BuildingTypeModel.findOne({
                _id: id
            });
            return {
                statusCode: common_2.HttpStatus.OK,
                message: 'Buiding Type Data Updated Successfully',
                data: updatedBuidingTypeData,
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const buildingTypeExist = await this.BuildingTypeModel.findOne({
                _id: id
            });
            if (!buildingTypeExist) {
                throw new common_2.HttpException('Building Type with this id not found', common_2.HttpStatus.NOT_FOUND);
            }
            await this.BuildingTypeModel.findByIdAndRemove(id);
            return {
                statusCode: common_2.HttpStatus.OK,
                msg: 'Building Type deleted Successfully'
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.BuildingTypesService = BuildingTypesService;
exports.BuildingTypesService = BuildingTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(buildingType_schema_1.BuildingType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BuildingTypesService);
//# sourceMappingURL=buildingType.service.js.map