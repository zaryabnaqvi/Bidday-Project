import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min, MinLength } from "class-validator";
import { Roles } from "src/Utilities/Template/types";

export class createUserDTO {
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsEnum(Roles)
    role: Roles
}
