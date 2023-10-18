import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class updateBidderDTO {

    @IsOptional()
    @IsNumberString()
    phoneNumber?: string = "923182834216";

    @IsOptional()
    @IsString()
    contact?: string = "923182834216";

    @IsOptional()
    @IsString()
    bidderName?: string = "LCI Estimation and Constructions";
}
