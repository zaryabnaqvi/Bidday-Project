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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDTO = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const types_1 = require("../../../Utilities/Template/types");
class updateUserDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { fullName: { required: false, type: () => String }, email: { required: false, type: () => String }, password: { required: false, type: () => String, minLength: 6 }, role: { required: false, enum: require("../../../Utilities/Template/types").Roles } };
    }
}
exports.updateUserDTO = updateUserDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateUserDTO.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], updateUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], updateUserDTO.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(types_1.Roles),
    __metadata("design:type", String)
], updateUserDTO.prototype, "role", void 0);
//# sourceMappingURL=UpdateUser.dto.js.map