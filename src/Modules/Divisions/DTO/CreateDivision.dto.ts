import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class createDivisionDTO {

    @IsNotEmpty()
    @IsString()
    divisionNumber: string;

    @IsNotEmpty()
    @IsString()
    divisionName: string; 
}
