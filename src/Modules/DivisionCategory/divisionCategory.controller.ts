import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DivisionCategoryService } from './Services/divisionCategory.service';
import { CreateDivisionCategoryDto } from './DTO/CreateDivisionCategory.dto';
import { UpdateDivisionCategoryDto } from './DTO/UpdateDivisionCategory.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('division-category')
@ApiTags('division-category')

export class DivisionCategoryController {
  constructor(private readonly divisionCategoryService: DivisionCategoryService) {}

  @Post("create/:DivisionId")
  create(@Param("DivisionId") DivisionId:string,@Body() createDivisionCategoryDto: CreateDivisionCategoryDto) {
    return this.divisionCategoryService.createDivisionCategory(DivisionId,createDivisionCategoryDto);
  }

  @Get()
  findAll() {
    return this.divisionCategoryService.fetchDivisionCategory();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divisionCategoryService.fetchDivisionCategoryById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDivisionCategoryDto: UpdateDivisionCategoryDto) {
    return this.divisionCategoryService.updateDivisionCategory(id, updateDivisionCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.divisionCategoryService.deleteDivision(id);
  }
}
