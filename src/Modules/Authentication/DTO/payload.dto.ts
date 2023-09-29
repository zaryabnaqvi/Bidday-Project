import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class payload {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;
}