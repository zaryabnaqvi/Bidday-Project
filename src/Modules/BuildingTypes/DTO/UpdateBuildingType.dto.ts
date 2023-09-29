import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Max, Min, MinLength } from "class-validator";
import { Roles } from "src/Utilities/Template/types";

export class UpdateBuildingTypeDTO {

    @IsOptional()
    @IsString()
    BuildingTypeName?: string;

  
}
