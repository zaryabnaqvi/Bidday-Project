import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class newPassDTO {

    @IsNotEmpty()
    @IsString()
    token: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

} 