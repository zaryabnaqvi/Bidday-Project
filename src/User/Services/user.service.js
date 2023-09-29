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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schema/user.schema");
const bcrypt_1 = require("../../Utilities/Hashing/bcrypt");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async fetchUsers() {
        try {
            const users = await this.userModel.find();
            if (users.length === 0) {
                throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'Users Found Successfully',
                data: users
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fetchUserById(id) {
        try {
            const userById = await this.userModel.findOne({
                _id: id
            });
            if (!userById) {
                throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'User by Id  Found Successfully',
                data: userById
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fetchUsersByRole(userBody) {
        try {
            const usersByRole = await this.userModel.find({
                role: userBody.role
            });
            if (usersByRole.length === 0) {
                throw new common_1.HttpException('No user with this role found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'User by Role  Found Successfully',
                data: usersByRole
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateUser(id, userBody) {
        try {
            console.log("In the update user Services");
            if (userBody.password) {
                userBody.password = (0, bcrypt_1.encodePassword)(userBody.password);
            }
            await this.userModel.findByIdAndUpdate(id, userBody);
            const updatedUserData = await this.userModel.findOne({
                _id: id
            });
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'User Data Updated Successfully',
                data: updatedUserData,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteUser(id) {
        try {
            const userById = await this.userModel.findOne({
                _id: id
            });
            if (!userById) {
                throw new common_1.HttpException('User with this id not found', common_1.HttpStatus.NOT_FOUND);
            }
            await this.userModel.findByIdAndRemove(id);
            return {
                statusCode: common_1.HttpStatus.OK,
                msg: 'User deleted Successfully'
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map