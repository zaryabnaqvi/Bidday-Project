import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/User/user.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Modules/Authentication/auth.module';
import { config } from 'dotenv';
import { DivisionModule } from './Modules/Divisions/division.module';
import { BidderModule } from './Modules/Bidders/bidder.module';
import { MarketModule } from './Modules/Markets/market.module';
import { ProjectCodeModule } from './Modules/ProjectCodes/projectCode.module';
import { BuildingTypesModule } from './Modules/BuildingTypes/buildingType.module';
import { ProjectsModule } from './Modules/Projects/projects.module';
import { DivisionCategoryModule } from './Modules/DivisionCategory/divisionCategory.module';
import { BreakDownItemModule } from './Modules/BreakDownItems/BreakDownItem.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true, 
      load: [config] 
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MongoDB_URL,
        // uri : 'mongodb://localhost:27017/meloTest'
      }),
    }),
    UserModule,
    AuthModule,
    MarketModule,
    ProjectCodeModule, 
    DivisionModule,
    BidderModule,
    BuildingTypesModule,
    ProjectsModule,
    DivisionCategoryModule,
    BreakDownItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 