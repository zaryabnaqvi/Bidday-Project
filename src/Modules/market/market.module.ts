import { Module } from '@nestjs/common';
import { MarketService } from './Services/market.service';
import { MarketController } from './market.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketSchema } from './Schemas/maket.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"Market",schema:MarketSchema}]),],
  controllers: [MarketController],
  providers: [MarketService],
  exports:[MarketService]
})
export class MarketModule {}
