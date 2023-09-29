import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsPhoneNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class verifyOtpDTO {
    @IsNotEmpty()
    @IsNumberString()
    code: string;
}