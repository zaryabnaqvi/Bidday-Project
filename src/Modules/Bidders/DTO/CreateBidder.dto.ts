import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class createBidderDTO {

    @IsNotEmpty()
    @IsNumberString()
    phoneNumber: string = "923182834216";

    @IsNotEmpty()
    @IsString()
    contact: string = "923182834216";

    @IsNotEmpty()
    @IsString()
    companyName: string = "LCI Estimation and Constructions"; 
}
