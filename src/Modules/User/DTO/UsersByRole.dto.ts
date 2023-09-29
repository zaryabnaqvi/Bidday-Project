import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min, MinLength } from "class-validator";
import { Roles } from "src/Utilities/Template/types";

export class usersByRoleDTO {
    @IsNotEmpty()
    @IsEnum(Roles)
    role: Roles
}
