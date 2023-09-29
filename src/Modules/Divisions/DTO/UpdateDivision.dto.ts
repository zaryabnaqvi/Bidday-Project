import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Max, Min, MinLength } from "class-validator";
import { Roles } from "src/Utilities/Template/types";

export class updateDivisionDTO {

    @IsOptional()
    @IsString()
    divisionNumber?: string;

    @IsOptional()
    @IsString()
    divisionName?: string; 
}
