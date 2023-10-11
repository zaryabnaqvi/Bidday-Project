import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndividualBidService } from './Services/IndividualBid.service';
import { CreateIndividualBidDto } from './DTO/CreateIndividualBid.dto';
import { UpdateIndividualBidDto } from './DTO/UpdateIndividualBid.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('IndividialBid')
@ApiTags("IndividialBid")
export class IndividualBidController {
  constructor(private readonly IndividualBidService: IndividualBidService) {}

  @Post("create/:breakDownItemId/:biddersId")
  create(@Body() createIndividualBidDto: CreateIndividualBidDto,@Param("breakDownItemId") breakDownItemId:string,@Param("biddersId") biddersId:string) {
    return this.IndividualBidService.create(breakDownItemId,biddersId,createIndividualBidDto);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateIndividualBidDto: UpdateIndividualBidDto) {
    return this.IndividualBidService.update(id, updateIndividualBidDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.IndividualBidService.remove(id);
  }
}
