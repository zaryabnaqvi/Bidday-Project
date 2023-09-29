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
exports.DivisionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const division_schema_1 = require("../Schema/division.schema");
let DivisionService = class DivisionService {
    constructor(divisionModel) {
        this.divisionModel = divisionModel;
    }
    async fetchDivisions() {
        try {
            const divisions = await this.divisionModel.find();
            if (divisions.length === 0) {
                throw new common_1.HttpException('No division found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Divisions Found Successfully',
                data: divisions
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fetchDivisionById(id) {
        try {
            const divisionById = await this.divisionModel.findOne({
                _id: id
            });
            if (!divisionById) {
                throw new common_1.HttpException('No Division found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Division by Id  Found Successfully',
                data: divisionById
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createDivision(createDivisionBody) {
        try {
            const { divisionNumber, divisionName } = createDivisionBody;
            const isDivisionExist = await this.divisionModel.findOne({
                divisionNumber,
                divisionName
            });
            if (isDivisionExist) {
                throw new common_1.HttpException('Division is already exist', common_1.HttpStatus.BAD_REQUEST);
            }
            const toCreateDivision = createDivisionBody;
            const newDivision = new this.divisionModel(toCreateDivision);
            const createdDivision = await newDivision.save();
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Division Created Successfully',
                data: createdDivision
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateDivision(id, divisionBody) {
        try {
            const updateDivision = divisionBody;
            await this.divisionModel.findByIdAndUpdate(id, updateDivision);
            const updatedDivisionData = await this.divisionModel.findOne({
                _id: id
            });
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Division Data Updated Successfully',
                data: updatedDivisionData,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteDivision(id) {
        try {
            const divisionById = await this.divisionModel.findOne({
                _id: id
            });
            if (!divisionById) {
                throw new common_1.HttpException('Division with this id not found', common_1.HttpStatus.NOT_FOUND);
            }
            await this.divisionModel.findByIdAndRemove(id);
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Division deleted Successfully'
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.DivisionService = DivisionService;
exports.DivisionService = DivisionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(division_schema_1.Divisions.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DivisionService);
//# sourceMappingURL=division.service.js.map