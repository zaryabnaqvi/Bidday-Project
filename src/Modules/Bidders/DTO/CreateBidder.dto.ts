import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class createBidderDTO {

    @IsNotEmpty()
    @IsNumberString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    contact: string;

    @IsNotEmpty()
    @IsString()
    bidderName: string; 
}
