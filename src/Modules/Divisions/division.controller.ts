import { 
    Body, 
    Get, 
    ParseIntPipe,
    Param,
    Patch,
    Post, 
    Delete,
    UseGuards,
    Query,
    UsePipes,
    ValidationPipe,
    Request, 
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DivisionService } from './Services/division.service';
import { updateDivisionDTO } from './DTO/UpdateDivision.dto';
import { createDivisionDTO } from './DTO/CreateDivision.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('divisions')
@ApiTags('Divisions')
export class DivisionController {
    constructor(
        private divisionService: DivisionService
    ){}

    //#region : Divisions CRUD

    //Ready and Verified by Jawwad
    @Get()
    async fetchDivisions(){
        const result = await this.divisionService.fetchDivisions();
        return result;
    }

    //Ready and Verified by Jawwad
    @Get(':divisionId')
    async fetchDivisionById(@Param('divisionId') id: string){
        const result = await this.divisionService.fetchDivisionById(id);
        return result;
    }

    //Ready and Verified by Jawwad
    @Post('create')
    @UsePipes(ValidationPipe)
    async createDivision(@Body() CreateDivisionDto: createDivisionDTO) {
        const result = await this.divisionService.createDivision(CreateDivisionDto);
        return result;
    }

    //Ready and Verified by Jawwad
    @Patch('update/:divisionId')
    @UsePipes(ValidationPipe)
    async updateDivision(@Param('divisionId') divisionId: string, @Body() divisionBody: updateDivisionDTO){
        console.log(divisionId);
        if(Object.keys(divisionBody).length === 0){
            throw new HttpException('Empty Body request is not allowed',HttpStatus.BAD_REQUEST);
        }
        const result = await this.divisionService.updateDivision(divisionId, divisionBody);
        return result;
    }

    //Ready and Verified by Jawwad
    @Delete('delete/:divisionId')
    async deleteDivision(@Param('divisionId') divisionId: string){
        console.log(divisionId);
        const result = await this.divisionService.deleteDivision(divisionId);
        return result;
    }
    //#endregion
}
