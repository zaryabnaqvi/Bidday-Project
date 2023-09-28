import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ProjectsService } from './Services/projects.service';
import { CreateProjectDto } from './DTO/CreateProject.dto';
import { UpdateProjectDto } from './DTO/UpdateProject.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { retry } from 'rxjs';


@Controller('projects')
@ApiTags('projects')

export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post("create")
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
    // return "project"
  }

  @Get("getProjects")
  findAll() {
    return this.projectsService.findAll();
  }

  @Get('getProject/:id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }


  @UseGuards(AuthGuard("jwt")) //Make a guard to filter every users projects for them 
  @Get("getProjectsByUser/:id")
  async findByUser(@Param('id') userId: string ){
   return await this.projectsService.getUsersProject(userId)
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
