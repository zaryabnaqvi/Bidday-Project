import { Module } from '@nestjs/common';
import { ProjectCodeService } from './Services/projectCode.service';
import { ProjectCodeController } from './projectCode.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectCode, ProjectCodeSchema } from './Schemas/projectCode.schema';
import { MarketModule } from '../Markets/market.module';
import { Market, MarketSchema } from '../Markets/Schemas/maket.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: ProjectCode.name,
        schema: ProjectCodeSchema
      },
      {
        name: Market.name,
        schema: MarketSchema
      },
    ]),
    MarketModule
  ],

  controllers: [ProjectCodeController],
  providers: [ProjectCodeService],
})
export class ProjectCodeModule {}
