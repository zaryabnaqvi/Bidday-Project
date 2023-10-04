import { PartialType } from '@nestjs/mapped-types';
import { CreateBreakDownItemDto } from './createBreakDownItemdto';

export class UpdateBreakDownItemDto extends PartialType(CreateBreakDownItemDto) {}
