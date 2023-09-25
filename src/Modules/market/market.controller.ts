import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketService } from './Services/market.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { Types } from 'mongoose';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Post("/create")
  create(@Body() createMarketDto: CreateMarketDto) {
    return this.marketService.create(createMarketDto);
  }

  @Get("/getMarkets")
  findAll() {
    return this.marketService.findAll();
  }
 

  @Get('getMarket/:id')
  findOne(@Param('id') id: string) {
    return this.marketService.findOne(id);
  }

  @Patch('updateMarket/:id')
  update(@Param('id') id: string, @Body() updateMarketDto: UpdateMarketDto) {
    return this.marketService.update(id, updateMarketDto);
  }

  @Delete('deleteMarket/:id')
  remove(@Param('id') id: string) {
    return this.marketService.remove(id);
  }
}
