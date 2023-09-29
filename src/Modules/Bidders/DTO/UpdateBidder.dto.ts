import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class updateBidderDTO {

    @IsOptional()
    @IsNumberString()
    phoneNumber?: string;

    @IsOptional()
    @IsString()
    contact?: string;

    @IsOptional()
    @IsString()
    bidderName?: string;
}
