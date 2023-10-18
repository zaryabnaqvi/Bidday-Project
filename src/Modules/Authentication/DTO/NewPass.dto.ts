import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class newPassDTO {

    @IsNotEmpty()
    @IsString()
    token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11aGFtbWFkamF3d2FkNDE3QGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ0NjE4MywiZXhwIjoxNjk3NDQ5NzgzfQ.aICBuu7jQ4VJ-YsGhbDM614K_Lw6AehsQtmHVNb6YxE";

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string = "123456";

} 