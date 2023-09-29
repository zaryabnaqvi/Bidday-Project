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
exports.MarketController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const market_service_1 = require("./Services/market.service");
const CreateMarket_dto_1 = require("./DTO/CreateMarket.dto");
const UpdateMarket_dto_1 = require("./DTO/UpdateMarket.dto");
const swagger_1 = require("@nestjs/swagger");
let MarketController = class MarketController {
    constructor(marketService) {
        this.marketService = marketService;
    }
    async create(createMarketDto) {
        return await this.marketService.create(createMarketDto);
    }
    async findAll() {
        return await this.marketService.findAll();
    }
    async findOne(id) {
        return await this.marketService.findOne(id);
    }
    async update(id, updateMarketDto) {
        return await this.marketService.update(id, updateMarketDto);
    }
    async remove(id) {
        return await this.marketService.remove(id);
    }
};
exports.MarketController = MarketController;
__decorate([
    (0, common_1.Post)("/create"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateMarket_dto_1.CreateMarketDTO]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/getMarkets"),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getMarket/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('updateMarket/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateMarket_dto_1.UpdateMarketDTO]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteMarket/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "remove", null);
exports.MarketController = MarketController = __decorate([
    (0, common_1.Controller)('markets'),
    (0, swagger_1.ApiTags)('Markets'),
    __metadata("design:paramtypes", [market_service_1.MarketService])
], MarketController);
//# sourceMappingURL=market.controller.js.map