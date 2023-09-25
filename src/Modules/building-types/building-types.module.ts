import { Module } from '@nestjs/common';
import { BuildingTypesService } from './Services/building-types.service';
import { BuildingTypesController } from './building-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildingType, BuildingTypeSchema } from './Schemas/projet-code.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:BuildingType.name,schema:BuildingTypeSchema}])],
  controllers: [BuildingTypesController],
  providers: [BuildingTypesService],
})
export class BuildingTypesModule {}
