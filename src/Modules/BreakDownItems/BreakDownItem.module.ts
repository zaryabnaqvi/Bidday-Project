import { Module } from '@nestjs/common';
import { BreakDownItemService } from './Services/BreakDownItem.service';
import { BreakDownItemController } from './BreakDownItem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BreakDownItem, BreakDownItemSchema } from './Schema/BreakDownItem.schema';
import { DivisionCategory, DivisionCategorySchema } from '../DivisionCategory/Schemas/divisionCategory.schema';
import { Project, ProjectSchema } from '../Projects/Schemas/project.schema';
import { Divisions, DivisionsSchema } from '../Divisions/Schema/division.schema';
import { InitialBid, InitialBidSchema } from '../InitialBid/Schema/InitialBid.schema';
import { IndividualBid, IndividualBidSchema } from '../IndividualBid/Schema/IndividualBid.schema';
import { Bidders, BiddersSchema } from '../Bidders/Schema/bidder.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:BreakDownItem.name,schema:BreakDownItemSchema},
    {name:DivisionCategory.name,schema:DivisionCategorySchema},
    {name:Project.name,schema:ProjectSchema},
    {name:Divisions.name,schema:DivisionsSchema},
    {name:InitialBid.name,schema:InitialBidSchema},
    {name:IndividualBid.name,schema:IndividualBidSchema},
    {name:Bidders.name,schema:BiddersSchema}




  ])],
  controllers: [BreakDownItemController],
  providers: [BreakDownItemService],
})
export class BreakDownItemModule {}
