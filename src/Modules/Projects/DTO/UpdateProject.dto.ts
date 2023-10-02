import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDTO } from './CreateProject.dto';

export class UpdateProjectDTO extends PartialType(CreateProjectDTO) {}