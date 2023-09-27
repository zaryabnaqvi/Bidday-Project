import { Module } from '@nestjs/common';
import { BuildingTypesService } from './Services/buildingType.service';
import { BuildingTypesController } from './buildingType.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildingType, BuildingTypeSchema } from './Schemas/buildingType.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: BuildingType.name,
        schema:BuildingTypeSchema
      }
    ])
  ],
  controllers: [BuildingTypesController],
  providers: [BuildingTypesService],
})
export class BuildingTypesModule {}
