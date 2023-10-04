import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class  CreateDivisionCategoryDto {
    
    @IsNotEmpty()
    @IsString()
    divisionCategoryName: string; 
}
