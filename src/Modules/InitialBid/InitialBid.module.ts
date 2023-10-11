import { Module } from '@nestjs/common';
import { InitialBidService } from './Services/InitialBid.service';
import { InitialBidController } from './InitialBid.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InitialBid, InitialBidSchema } from './Schema/InitialBid.schema';
import { Project, ProjectSchema } from '../Projects/Schemas/project.schema';
// import { ProjectCodeSchema } from '../ProjectCodes/Schemas/projectCode.schema';
import { DivisionCategory } from '../divisionCategory/Schemas/divisionCategory.schema';
import { DivisionsSchema } from '../Divisions/Schema/division.schema';
import { Bidders, BiddersSchema } from '../Bidders/Schema/bidder.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:InitialBid.name,schema:InitialBidSchema},
    {name:Project.name,schema:ProjectSchema},
    {name:DivisionCategory.name,schema:DivisionsSchema},
    {name:Bidders.name,schema:BiddersSchema}
  ])],
  controllers: [InitialBidController],
  providers: [InitialBidService],
})
export class InitialBidModule {}
