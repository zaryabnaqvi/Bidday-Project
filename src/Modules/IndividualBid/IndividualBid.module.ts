import { Module } from '@nestjs/common';
import { IndividualBidService } from './Services/IndividualBid.service';
import { IndividualBidController } from './IndividualBid.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IndividualBid, IndividualBidSchema } from './Schema/IndividualBid.schema';
import { Project } from '../Projects/Schemas/project.schema';
import { ProjectCodeSchema } from '../ProjectCodes/Schemas/projectCode.schema';
// import { BreakDownItem } from '../BreakDownItems/Schema/BreakDownItem.schema';
import { DivisionsSchema } from '../Divisions/Schema/division.schema';
import { Bidders, BiddersSchema } from '../Bidders/Schema/bidder.schema';
import { BreakDownItem } from '../BreakDownItems/Schema/BreakDownItem.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:IndividualBid.name,schema:IndividualBidSchema},
    {name:BreakDownItem.name,schema:DivisionsSchema},
    {name:Bidders.name,schema:BiddersSchema}
  ])],
  controllers: [IndividualBidController],
  providers: [IndividualBidService],
})
export class IndividualBidModule {}
