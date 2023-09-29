import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from '../Schemas/project.schema';
import { CreateProjectDto } from '../DTO/CreateProject.dto';
import { UpdateProjectDto } from '../DTO/UpdateProject.dto';

@Injectable()
export class ProjectsService{
  constructor(@InjectModel(Project.name) private projectModel: Model<Project>) {}

  async create(createProjectDto: CreateProjectDto) {
    try {
      const { LCINumber } = createProjectDto;
      const isProjectExist = await this.projectModel.findOne({ LCINumber });

      if (isProjectExist) {
        throw new BadRequestException('Project with the same LCINumber already exists');
      }

      const project = new this.projectModel(createProjectDto);
      const createdProject = await project.save();

      return {
        statusCode: 201,
        message: 'Project created successfully',
        data: createdProject,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const projects = await this.projectModel.find().exec();

      if (!projects || projects.length === 0) {
        throw new NotFoundException('No projects found');
      }

      return {
        statusCode: 200,
        message: 'Projects found successfully',
        data: projects,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const project = await this.projectModel.findById(id).exec();

      if (!project) {
        throw new NotFoundException('Project not found');
      }

      return {
        statusCode: 200,
        message: 'Project found successfully',
        data: project,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async getUsersProject(id:Types.ObjectId|string){
    try {
      const projects = await this.projectModel.find({UserId:id.toString()}).exec();

      if (!projects || projects.length === 0) {
        throw new NotFoundException('No projects found');
      }

      return {
        statusCode: 200,
        message: 'Projects found successfully for user',
        data: projects,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    try {
      if (!updateProjectDto || Object.keys(updateProjectDto).length === 0) {
        throw new BadRequestException('Empty update data');
      }

      const updatedProject = await this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true }).exec();

      if (!updatedProject) {
        throw new NotFoundException('Project not found');
      }

      return {
        statusCode: 200,
        message: 'Project updated successfully',
        data: updatedProject,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const deletedProject = await this.projectModel.findByIdAndDelete(id).exec();

      if (!deletedProject) {
        throw new NotFoundException('Project not found');
      }

      return {
        statusCode: 200,
        message: 'Project deleted successfully',
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
