import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingTypesService } from './Services/building-types.service';
import { CreateBuildingTypeDTO } from './dto/create-building-type.dto';
import { UpdateBuildingTypeDTO } from './dto/update-building-type.dto';

@Controller('building-types')
export class BuildingTypesController {
  constructor(private readonly buildingTypesService: BuildingTypesService) {}

  @Post("create")
  create(@Body() createBuildingTypeDto: CreateBuildingTypeDTO) {
    return this.buildingTypesService.create(createBuildingTypeDto);
  }

  @Get("getBuildingTypes")
  findAll() {
    return this.buildingTypesService.findAll();
  }

  @Get('getBuildingType/:id')
  findOne(@Param('id') id: string) {
    return this.buildingTypesService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateBuildingTypeDto: UpdateBuildingTypeDTO) {
    return this.buildingTypesService.update(id, updateBuildingTypeDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.buildingTypesService.remove(id);
  }
}
 