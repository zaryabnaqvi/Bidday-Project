import { IsEmail, IsNotEmpty, IsString, } from 'class-validator';

export class resetPasswordDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
}