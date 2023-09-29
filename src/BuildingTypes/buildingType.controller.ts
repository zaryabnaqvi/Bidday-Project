import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { BuildingTypesService } from './Services/buildingType.service';
import { CreateBuildingTypeDTO } from './DTO/CreateBuildingType.dto';
import { UpdateBuildingTypeDTO } from './DTO/UpdateBuildingType.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('buildingTypes')
@ApiTags('BuildingTypes')
export class BuildingTypesController {
  constructor(private readonly buildingTypesService: BuildingTypesService) {}

  //Ready and verified by Jawwad
  @Post("create")
  @UsePipes(ValidationPipe)
  async create(@Body() createBuildingTypeDto: CreateBuildingTypeDTO) {
    return await this.buildingTypesService.create(createBuildingTypeDto);
  }

  //Ready and verified by Jawwad
  @Get("getBuildingTypes")
  async findAll() {
    return await this.buildingTypesService.findAll();
  }

  //Ready and verified by Jawwad
  @Get('getBuildingType/:id')
  async findOne(@Param('id') id: string) {
    return await this.buildingTypesService.findOne(id);
  }

  //Ready and verified by Jawwad
  @Patch('update/:id')
  @UsePipes(ValidationPipe)
  async update(@Param('id') id: string, @Body() updateBuildingTypeDto: UpdateBuildingTypeDTO) {
    return await this.buildingTypesService.update(id, updateBuildingTypeDto);
  }

  //Ready and verified by Jawwad
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.buildingTypesService.remove(id);
  }
}
 