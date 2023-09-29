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
exports.BidderController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const bidder_service_1 = require("./Services/bidder.service");
const CreateBidder_dto_1 = require("./DTO/CreateBidder.dto");
const UpdateBidder_dto_1 = require("./DTO/UpdateBidder.dto");
const swagger_1 = require("@nestjs/swagger");
let BidderController = class BidderController {
    constructor(bidderService) {
        this.bidderService = bidderService;
    }
    async fetchBidder() {
        const result = await this.bidderService.fetchBidders();
        return result;
    }
    async fetchBidderById(id) {
        const result = await this.bidderService.fetchBidderById(id);
        return result;
    }
    async createBidder(CreateBidderDto) {
        const result = await this.bidderService.createBidder(CreateBidderDto);
        return result;
    }
    async updateBidder(bidderId, bidderBody) {
        console.log(bidderId);
        if (Object.keys(bidderBody).length === 0) {
            throw new common_1.HttpException('Empty Body request is not allowed', common_1.HttpStatus.BAD_REQUEST);
        }
        const result = await this.bidderService.updateBidder(bidderId, bidderBody);
        return result;
    }
    async deleteBidder(bidderId) {
        console.log(bidderId);
        const result = await this.bidderService.deleteBidder(bidderId);
        return result;
    }
};
exports.BidderController = BidderController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BidderController.prototype, "fetchBidder", null);
__decorate([
    (0, common_1.Get)(':bidderId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('bidderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BidderController.prototype, "fetchBidderById", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBidder_dto_1.createBidderDTO]),
    __metadata("design:returntype", Promise)
], BidderController.prototype, "createBidder", null);
__decorate([
    (0, common_1.Patch)('update/:bidderId'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('bidderId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBidder_dto_1.updateBidderDTO]),
    __metadata("design:returntype", Promise)
], BidderController.prototype, "updateBidder", null);
__decorate([
    (0, common_1.Delete)('delete/:bidderId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('bidderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BidderController.prototype, "deleteBidder", null);
exports.BidderController = BidderController = __decorate([
    (0, common_2.Controller)('bidders'),
    (0, swagger_1.ApiTags)('Bidders'),
    __metadata("design:paramtypes", [bidder_service_1.BidderService])
], BidderController);
//# sourceMappingURL=bidder.controller.js.map