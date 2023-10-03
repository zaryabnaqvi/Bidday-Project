import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ProjectsService } from './Services/projects.service';
import { CreateProjectDTO } from '../Projects/DTO/CreateProject.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { retry } from 'rxjs';
import { UpdateProjectDTO } from './DTO/UpdateProject.dto';


@Controller('projects')
@ApiTags('Projects')

export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post("create")
  async create(@Body() createProjectDto: CreateProjectDTO) {
    return await this.projectsService.create(createProjectDto);
    // return "project"
  }

  @Get("getProjects")
  async findAll() {
    return await this.projectsService.findAll();
  }

  @Get('getProject/:id')
  async findOne(@Param('id') id: string) {
    return await this.projectsService.findOne(id);
  }


  @UseGuards(AuthGuard("jwt")) //Make a guard to filter every users projects for them 
  @Get("getProjectsByUser/:id")
  async findByUser(@Param('id') userId: string ){
   return await this.projectsService.getUsersProject(userId)
  }


  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDTO) {
    return await this.projectsService.update(id, updateProjectDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.projectsService.remove(id);
  }
}