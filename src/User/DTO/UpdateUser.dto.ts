import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { Roles } from "src/Utilities/Template/types";


export class updateUserDTO {

    @IsOptional()
    @IsString()
    fullName?: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    password?: string;

    @IsOptional()
    @IsEnum(Roles)
    role?: Roles;
}
