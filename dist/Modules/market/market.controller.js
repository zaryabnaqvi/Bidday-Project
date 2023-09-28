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
const common_1 = require("@nestjs/common");
const market_service_1 = require("./Services/market.service");
const create_market_dto_1 = require("./dto/create-market.dto");
const update_market_dto_1 = require("./dto/update-market.dto");
let MarketController = class MarketController {
    constructor(marketService) {
        this.marketService = marketService;
    }
    create(createMarketDto) {
        return this.marketService.create(createMarketDto);
    }
    findAll() {
        return this.marketService.findAll();
    }
    findOne(id) {
        return this.marketService.findOne(id);
    }
    update(id, updateMarketDto) {
        return this.marketService.update(id, updateMarketDto);
    }
    remove(id) {
        return this.marketService.remove(id);
    }
};
exports.MarketController = MarketController;
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_market_dto_1.CreateMarketDto]),
    __metadata("design:returntype", void 0)
], MarketController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/getMarkets"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarketController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getMarket/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarketController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('updateMarket/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_market_dto_1.UpdateMarketDto]),
    __metadata("design:returntype", void 0)
], MarketController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteMarket/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarketController.prototype, "remove", null);
exports.MarketController = MarketController = __decorate([
    (0, common_1.Controller)('market'),
    __metadata("design:paramtypes", [market_service_1.MarketService])
], MarketController);
//# sourceMappingURL=market.controller.js.map