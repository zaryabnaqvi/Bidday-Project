import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InitialBidService } from './Services/InitialBid.service';
import { CreateInitialBidDto } from './DTO/CreateInitialBid.dto';
import { UpdateInitialBidDto } from './DTO/UpdateInitialBid.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('InitialBid')
@ApiTags("InitialBid")
export class InitialBidController {
  constructor(private readonly initialBidService: InitialBidService) {}

  @Post("create/:divisionCategoryId/:ProjectId/:biddersId")
  create(@Body() createInitialBidDto: CreateInitialBidDto,@Param("divisionCategoryId") divisionCategoryId:string,@Param("ProjectId") projectId:string,@Param("biddersId") biddersId:string) {
    return this.initialBidService.create(divisionCategoryId,projectId,biddersId,createInitialBidDto);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateInitialBidDto: UpdateInitialBidDto) {
    return this.initialBidService.update(id, updateInitialBidDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.initialBidService.remove(id);
  }
}
