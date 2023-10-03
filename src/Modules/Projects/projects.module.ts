import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsService } from './Services/projects.service';
import { Project, ProjectSchema } from './Schemas/project.schema';
// import { ProjectCodeSchema } from '../ProjectCodes/Schemas/projectCode.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Project.name,
        schema:ProjectSchema
      }
    ])
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
