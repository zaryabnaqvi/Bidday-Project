import { Module } from '@nestjs/common';
import { DivisionCategoryService } from './Services/divisionCategory.service';
import { DivisionCategoryController } from './divisionCategory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DivisionCategory, DivisionCategorySchema } from './Schemas/divisionCategory.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:DivisionCategory.name,schema:DivisionCategorySchema}])],
  controllers: [DivisionCategoryController],
  providers: [DivisionCategoryService],
})
export class DivisionCategoryModule {}
