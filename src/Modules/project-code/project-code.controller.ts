import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectCodeService } from './Services/project-code.service';
import { CreateProjectCodeDto } from './dto/create-project-code.dto';
import { UpdateProjectCodeDto } from './dto/update-project-code.dto';
import { Types } from 'mongoose';

@Controller('project-code')
export class ProjectCodeController {
  constructor(private readonly projectCodeService: ProjectCodeService) {}

  @Post("/create/:id")
  create(@Param("id") MarketId : string | Types.ObjectId ,@Body() createProjectCodeDto: CreateProjectCodeDto) {
    return this.projectCodeService.create(MarketId,createProjectCodeDto);
  }

  // @Get()
  // findAll() {
  //   return this.projectCodeService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.projectCodeService.findOne(+id);
  // }

   @Patch('updateProjectCode/:id')
   update(@Param('id') id: string, @Body() updateProjectCodeDto: UpdateProjectCodeDto) {
     return this.projectCodeService.update(id, updateProjectCodeDto);
   }

   @Delete('deleteProjectCode/:Marketid/:id')
   remove(@Param('id') id: string|Types.ObjectId,@Param("Marketid") MarketId : string | Types.ObjectId) {
     return this.projectCodeService.remove(id,MarketId);
   }
}
