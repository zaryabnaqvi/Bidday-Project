import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './CreateProject.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
