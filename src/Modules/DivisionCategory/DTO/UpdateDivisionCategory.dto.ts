import { PartialType } from '@nestjs/mapped-types';
import { CreateDivisionCategoryDto } from './CreateDivisionCategory.dto';

export class UpdateDivisionCategoryDto extends PartialType(CreateDivisionCategoryDto) {}
