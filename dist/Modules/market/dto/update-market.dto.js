"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMarketDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_market_dto_1 = require("./create-market.dto");
class UpdateMarketDto extends (0, mapped_types_1.PartialType)(create_market_dto_1.CreateMarketDto) {
}
exports.UpdateMarketDto = UpdateMarketDto;
//# sourceMappingURL=update-market.dto.js.map