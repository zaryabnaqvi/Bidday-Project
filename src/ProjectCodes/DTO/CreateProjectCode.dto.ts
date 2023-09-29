import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateProjectCodeDTO {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    MarketId: string;
}
