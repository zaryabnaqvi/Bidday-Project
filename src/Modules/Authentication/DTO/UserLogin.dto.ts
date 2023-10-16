import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min, MinLength } from "class-validator";
import { Roles } from "../../../Utilities/Template/types";

export class userLoginDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string = "muhammadjawwad417@gmail.com";

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string = "bcit-076";

    @IsNotEmpty()
    @IsEnum(Roles)
    role: Roles;
}
