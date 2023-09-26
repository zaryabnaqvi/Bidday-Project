import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class CreateBuildingTypeDTO {

    @IsNotEmpty()
    @IsString()
    BuildingTypeName: string

}
