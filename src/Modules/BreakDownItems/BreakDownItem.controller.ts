import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BreakDownItemService } from './Services/BreakDownItem.service';
import { CreateBreakDownItemDto } from './DTO/createBreakDownItemdto';
import { UpdateBreakDownItemDto } from './DTO/updateBreakDownItem.dto';
import { ApiTags } from '@nestjs/swagger';

// import { DivisionCategory } from '../DivisionCategory/Schemas/divisionCategory.schema';

@Controller('break-down-item')
@ApiTags('break-down-items')

export class BreakDownItemController {
  constructor(private readonly BreakDownItemService: BreakDownItemService) {}

  @Post("create/:ProjectId/:DivisionCategoryId")
  create(@Body() createBreakDownItemDto: CreateBreakDownItemDto,@Param("ProjectId") projectId:string,@Param("DivisionCategoryId") divisionCategoryId:string) {
    return this.BreakDownItemService.create(projectId,divisionCategoryId,createBreakDownItemDto);
  }

  @Get("getBreakdowns")
  findAll() {
    return this.BreakDownItemService.findAll();
  }


  @Get('getBreakDownItem/:id')
  findOne(@Param('id') id: string) {
    return this.BreakDownItemService.findOne(id);
  }

  @Get("getBreakDownItems/:ProjectId/:DivisionId")
  findBreakDownItemForDivision(@Param("ProjectId") projectId:string,@Param("DivisionId") divisionId:string){
    return this.BreakDownItemService.findAllCategoryBreakDownforDivision(divisionId,projectId)
  }

  @Patch('updateBreakDownItem/:id')
  update(@Param('id') id: string, @Body() updateBreakDownItemDto: UpdateBreakDownItemDto) {
    return this.BreakDownItemService.update(id, updateBreakDownItemDto);
  }

  @Delete('delelteBreakDownItem/:id')
  remove(@Param('id') id: string) {
    return this.BreakDownItemService.remove(id);
  }
}
