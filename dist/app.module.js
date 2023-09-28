"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./Modules/User/user.module");
const mongoose_module_1 = require("@nestjs/mongoose/dist/mongoose.module");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./Modules/Authentication/auth.module");
const dotenv_1 = require("dotenv");
const division_module_1 = require("./Modules/Divisions/division.module");
const bidder_module_1 = require("./Modules/Bidders/bidder.module");
const market_module_1 = require("./Modules/Markets/market.module");
const projectCode_module_1 = require("./Modules/ProjectCodes/projectCode.module");
const buildingType_module_1 = require("./Modules/BuildingTypes/buildingType.module");
const projects_module_1 = require("./Modules/projects/projects.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [dotenv_1.config]
            }),
            mongoose_module_1.MongooseModule.forRootAsync({
                useFactory: () => ({
                    uri: process.env.MongoDB_URL,
                }),
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            market_module_1.MarketModule,
            projectCode_module_1.ProjectCodeModule,
            division_module_1.DivisionModule,
            bidder_module_1.BidderModule,
            buildingType_module_1.BuildingTypesModule,
            projects_module_1.ProjectsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map