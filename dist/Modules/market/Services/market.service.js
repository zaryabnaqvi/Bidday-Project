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
exports.MarketService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const maket_schema_1 = require("../Schemas/maket.schema");
const mongoose_2 = require("mongoose");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
let MarketService = class MarketService {
    constructor(marketModel) {
        this.marketModel = marketModel;
    }
    async create(createMarketDto) {
        try {
            const isMarketCodeExist = await this.marketModel.findOne({
                name: createMarketDto.name
            });
            if (isMarketCodeExist) {
                throw new common_3.HttpException('market is already exist', common_2.HttpStatus.BAD_REQUEST);
            }
            const newMarketCode = new this.marketModel(createMarketDto);
            const createdMarket = await newMarketCode.save();
            return {
                statusCode: common_2.HttpStatus.OK,
                msg: 'User by Role  Found Successfully',
                data: createdMarket
            };
        }
        catch (error) {
            throw new common_3.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const Market = await this.marketModel.find();
            if (Market.length === 0) {
                throw new common_3.HttpException('No market found', common_2.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: common_2.HttpStatus.OK,
                msg: 'Market Found Successfully',
                data: Market
            };
        }
        catch (error) {
            throw new common_3.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        const isMarketCodeExist = await this.marketModel.findOne({ _id: id });
        if (!isMarketCodeExist) {
            throw new common_3.HttpException('Market not exist', common_2.HttpStatus.NOT_FOUND);
        }
        return isMarketCodeExist;
    }
    async update(id, updateMarketDto) {
        const updateMarket = await this.marketModel.findByIdAndUpdate(id, updateMarketDto, { new: true });
        return {
            statusCode: common_2.HttpStatus.OK,
            message: 'Market Updated Successfully',
            data: updateMarket,
        };
    }
    async remove(id) {
        try {
            const marketById = await this.marketModel.findOne({
                _id: id
            });
            if (!marketById) {
                throw new common_3.HttpException('market with this id not found', common_2.HttpStatus.NOT_FOUND);
            }
            await this.marketModel.findByIdAndRemove(id);
            return {
                statusCode: common_2.HttpStatus.OK,
                msg: 'market deleted Successfully'
            };
        }
        catch (error) {
            throw new common_3.HttpException(error.message, error.status || common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async AddProjectCodeToMarket(MarketId, newProjectCode) {
        const updatedProjectCodeIds = await this.marketModel.updateOne({ _id: MarketId }, { $push: { ProjectCodeIds: newProjectCode } });
        return {
            statusCode: common_2.HttpStatus.OK,
            message: 'Market Project Code Updated Successfully',
            data: updatedProjectCodeIds,
        };
    }
    async RemoveProjectCodeToMarket(MarketId, newProjectCode) {
        const removeProjectCodeIds = await this.marketModel.updateOne({ _id: MarketId }, { $push: { ProjectCodeIds: { _id: newProjectCode } } });
        return {
            statusCode: common_2.HttpStatus.OK,
            message: 'Market Project Code Updated Successfully',
            data: removeProjectCodeIds,
        };
    }
};
exports.MarketService = MarketService;
exports.MarketService = MarketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(maket_schema_1.Market.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MarketService);
//# sourceMappingURL=market.service.js.map