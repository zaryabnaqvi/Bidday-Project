import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { ProjectCodeService } from './Services/projectCode.service';
import { CreateProjectCodeDTO } from '../ProjectCodes/DTO/CreateProjectCode.dto';
import { UpdateProjectCodeDTO } from '../ProjectCodes/DTO/UpdateProjectCode.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('projectCodes')
@ApiTags('ProjectCodes')
export class ProjectCodeController {
  constructor(
    private readonly projectCodeService: ProjectCodeService
    ) {}
//#region : Project Code CRUD

  //Ready and verified by Jawwad
  @Post("/create")
  @UsePipes(ValidationPipe)
  async create(@Body() createProjectCodeDto: CreateProjectCodeDTO) {
    return await this.projectCodeService.create(createProjectCodeDto);
  }

  //Ready and verified by Jawwad
  @Get()
  async findAll() {
    return await this.projectCodeService.findAll();
  }

  //Ready and verified by Jawwad
  @Get(':projectCodeId')
  async findOne(@Param('projectCodeId') id: string) {
    return await this.projectCodeService.findOne(id);
  }

  //Ready and verified by Jawwad
  @Get('byMarket/:marketId')
  async findByMarketId(@Param('marketId') id: string) {
    return await this.projectCodeService.findByMarketId(id);
  }

  //Ready and verified by Jawwad
  @Patch('updateProjectCode/:projectCodeId')
  @UsePipes(ValidationPipe)
  update(@Param('projectCodeId') id: string, @Body() updateProjectCodeDto: UpdateProjectCodeDTO) {
    return this.projectCodeService.update(id, updateProjectCodeDto);
  }

  //Ready and verified by Jawwad
  @Delete('deleteProjectCode/:id')
  async remove(@Param('id') id: string) {
    return await this.projectCodeService.remove(id);
  }

//#endregion

}
