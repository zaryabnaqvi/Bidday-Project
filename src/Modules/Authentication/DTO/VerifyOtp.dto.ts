import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsPositive, MinLength } from 'class-validator';

export class verifyOtpDTO {

    @IsNotEmpty()
    code: string;

}