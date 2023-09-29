import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMarketDTO {
    
    @IsOptional()
    @IsString()
    name? :  string
}
