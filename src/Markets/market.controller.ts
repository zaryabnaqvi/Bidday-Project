import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { MarketService } from './Services/market.service';
import { CreateMarketDTO } from './DTO/CreateMarket.dto';
import { UpdateMarketDTO } from './DTO/UpdateMarket.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('markets')
@ApiTags('Markets')
export class MarketController {
  constructor(
    private readonly marketService: MarketService
  ) {}

  //#region : Market CRUD
  
  //Ready and Verified by Jawwad
  @Post("/create")
  @UsePipes(ValidationPipe)
  async create(@Body() createMarketDto: CreateMarketDTO) {
    return await this.marketService.create(createMarketDto);
  }

  //Ready and verified by Jawwad
  @Get("/getMarkets")
  async findAll() {
    return await this.marketService.findAll();
  }

  //Ready and verified by Jawwad
  @Get('getMarket/:id')
  async findOne(@Param('id') id: string) {
    return await this.marketService.findOne(id);
  }

  //Ready and verified by Jawwad
  @Patch('updateMarket/:id')
  @UsePipes(ValidationPipe)
  async update(@Param('id') id: string, @Body() updateMarketDto: UpdateMarketDTO) {
    return await this.marketService.update(id, updateMarketDto);
  }

  //Ready and verified by Jawwad
  @Delete('deleteMarket/:id')
  async remove(@Param('id') id: string) {
    return await this.marketService.remove(id);
  }
  //#endregion
}
