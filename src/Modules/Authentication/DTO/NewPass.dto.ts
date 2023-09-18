import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsPositive, MinLength } from 'class-validator';

export class newPassDTO {

    @IsNotEmpty()
    token: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

}