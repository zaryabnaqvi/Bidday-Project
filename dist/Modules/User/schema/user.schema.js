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
exports.UsersSchema = exports.Users = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const types_1 = require("../../../Utilities/Template/types");
let Users = class Users extends mongoose_2.Document {
};
exports.Users = Users;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        minlength: 2,
        maxlength: 50
    }),
    __metadata("design:type", String)
], Users.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        minlength: 6
    }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: types_1.Roles.Estimator
    }),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
exports.Users = Users = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Users);
exports.UsersSchema = mongoose_1.SchemaFactory.createForClass(Users);
//# sourceMappingURL=user.schema.js.map