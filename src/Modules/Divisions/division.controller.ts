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
    Request 
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DivisionService } from './Services/division.service';
import { updateDivisionDTO } from './DTO/UpdateDivision.dto';
import { createDivisionDTO } from './DTO/CreateDivision.dto';

@Controller('divisions')
export class DivisionController {
    constructor(
        private divisionService: DivisionService
    ){}

    @Get()
    async fetchDivisions(){
        const result = await this.divisionService.fetchDivisions();
        return result;
    }

    @Get(':divisionId')
    async fetchDivisionById(@Param('divisionId') id: string){
        const result = await this.divisionService.fetchDivisionById(id);
        return result;
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createDivision(@Body() CreateDivisionDto: createDivisionDTO) {
        const result = await this.divisionService.createDivision(CreateDivisionDto);
        return result;
    }

    @Patch('update/:divisionId')
    @UsePipes(ValidationPipe)
    async updateDivision(@Param('divisionId') divisionId: string, @Body() divisionBody:updateDivisionDTO){
        console.log(divisionId);
        const result = await this.divisionService.updateDivision(divisionId, divisionBody);
        return result;
    }

    @Delete('delete/:divisionId')
    async deleteDivision(@Param('divisionId') divisionId: string){
        console.log(divisionId);
        const result = await this.divisionService.deleteDivision(divisionId);
        return result;
    }
}
