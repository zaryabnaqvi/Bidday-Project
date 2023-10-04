import { Module } from '@nestjs/common';
import { BreakDownItemService } from './Services/BreakDownItem.service';
import { BreakDownItemController } from './BreakDownItem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BreakDownItem, BreakDownItemSchema } from './Schema/BreakDownItem.schema';
import { DivisionCategory, DivisionCategorySchema } from '../DivisionCategory/Schemas/divisionCategory.schema';
import { Project, ProjectSchema } from '../Projects/Schemas/project.schema';
import { Divisions, DivisionsSchema } from '../Divisions/Schema/division.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:BreakDownItem.name,schema:BreakDownItemSchema},
    {name:DivisionCategory.name,schema:DivisionCategorySchema},
    {name:Project.name,schema:ProjectSchema},
    {name:Divisions.name,schema:DivisionsSchema}
  ])],
  controllers: [BreakDownItemController],
  providers: [BreakDownItemService],
})
export class BreakDownItemModule {}
