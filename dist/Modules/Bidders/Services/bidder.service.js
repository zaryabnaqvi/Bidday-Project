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
exports.BidderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bidder_schema_1 = require("../Schema/bidder.schema");
const mongoose_2 = require("mongoose");
let BidderService = class BidderService {
    constructor(bidderModel) {
        this.bidderModel = bidderModel;
    }
    async fetchBidders() {
        try {
            const bidders = await this.bidderModel.find();
            if (bidders.length === 0) {
                throw new common_1.HttpException('No bidder found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Bidders Found Successfully',
                data: bidders
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fetchBidderById(id) {
        try {
            const bidderById = await this.bidderModel.findOne({
                _id: id
            });
            if (!bidderById) {
                throw new common_1.HttpException('No Bidder found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Bidder by Id  Found Successfully',
                data: bidderById
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createBidder(createBidderBody) {
        try {
            const { companyName, phoneNumber, contact } = createBidderBody;
            const isBidderExist = await this.bidderModel.findOne({
                companyName,
                phoneNumber,
                contact,
            });
            if (isBidderExist) {
                throw new common_1.HttpException('Bidder is already exist', common_1.HttpStatus.BAD_REQUEST);
            }
            const toCreateBidder = createBidderBody;
            const newBidder = new this.bidderModel(toCreateBidder);
            const createdBidder = await newBidder.save();
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Bidder Created Successfully',
                data: createdBidder
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateBidder(id, bidderBody) {
        try {
            const updateBidder = bidderBody;
            await this.bidderModel.findByIdAndUpdate(id, updateBidder);
            const updatedBidderData = await this.bidderModel.findOne({
                _id: id
            });
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Bidder Data Updated Successfully',
                data: updatedBidderData,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteBidder(id) {
        try {
            const bidderById = await this.bidderModel.findOne({
                _id: id
            });
            if (!bidderById) {
                throw new common_1.HttpException('Bidder with this id not found', common_1.HttpStatus.NOT_FOUND);
            }
            await this.bidderModel.findByIdAndRemove(id);
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Bidder deleted Successfully'
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.BidderService = BidderService;
exports.BidderService = BidderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bidder_schema_1.Bidders.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BidderService);
//# sourceMappingURL=bidder.service.js.map