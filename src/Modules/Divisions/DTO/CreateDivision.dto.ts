import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class createDivisionDTO {

    @IsNotEmpty()
    @IsNumberString()
    divisionNumber: string;

    @IsNotEmpty()
    @IsString()
    divisionName: string; 
}
