import { IsNotEmpty, IsString } from "class-validator";

export class CreateMarketDTO {
    
    @IsNotEmpty()
    @IsString()
    name: string;
}
