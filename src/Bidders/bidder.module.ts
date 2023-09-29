import { BidderController } from './bidder.controller';
import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bidders, BiddersSchema } from './Schema/bidder.schema';
import { BidderService } from './Services/bidder.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Bidders.name,
                schema: BiddersSchema
            },
        ])
    ],
    controllers: [BidderController],
    providers: [BidderService],
    exports: [BidderService]
})
export class BidderModule { }
