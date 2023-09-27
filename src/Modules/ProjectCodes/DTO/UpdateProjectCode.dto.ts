import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { isObjectIdOrHexString } from "mongoose";

export class UpdateProjectCodeDTO {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    marketId?: string;
}
