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
import { BidderService } from './Services/bidder.service';
import { createBidderDTO } from './DTO/CreateBidder.dto';
import { updateBidderDTO } from './DTO/UpdateBidder.dto';

@Controller('bidders')
export class BidderController {
    constructor(
        private bidderService: BidderService
    ){}
    
    @Get()
    async fetchBidder() {
        const result = await this.bidderService.fetchBidders();
        return result;
    }

    @Get(':bidderId')
    async fetchBidderById(@Param('bidderId') id: string) {
        const result = await this.bidderService.fetchBidderById(id);
        return result;
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createBidder(@Body() CreateBidderDto: createBidderDTO) {
        const result = await this.bidderService.createBidder(CreateBidderDto);
        return result;
    }

    @Patch('update/:bidderId')
    @UsePipes(ValidationPipe)
    async updateBidder(@Param('bidderId') bidderId: string, @Body() divisionBody: updateBidderDTO) {
        console.log(bidderId);
        const result = await this.bidderService.updateBidder(bidderId, divisionBody);
        return result;
    }

    @Delete('delete/:bidderId')
    async deleteBidder(@Param('bidderId') bidderId: string) {
        console.log(bidderId);
        const result = await this.bidderService.deleteBidder(bidderId);
        return result;
    }
}
