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
    Request,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { BidderService } from './Services/bidder.service';
import { createBidderDTO } from './DTO/CreateBidder.dto';
import { updateBidderDTO } from './DTO/UpdateBidder.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bidders')
@ApiTags('Bidders')
export class BidderController {
    constructor(
        private bidderService: BidderService
    ){}

    //Ready and Verified by Jawwad
    @Get()
    async fetchBidder() {
        const result = await this.bidderService.fetchBidders();
        return result;
    }

    //Ready and Verified by Jawwad
    @Get(':bidderId')
    async fetchBidderById(@Param('bidderId') id: string) {
        const result = await this.bidderService.fetchBidderById(id);
        return result;
    }

    //Ready and Verified by Jawwad
    @Post('create')
    @UsePipes(ValidationPipe)
    async createBidder(@Body() CreateBidderDto: createBidderDTO) {
        const result = await this.bidderService.createBidder(CreateBidderDto);
        return result;
    }

    //Ready and Verified by Jawwad
    @Patch('update/:bidderId')
    @UsePipes(ValidationPipe)
    async updateBidder(@Param('bidderId') bidderId: string, @Body() bidderBody: updateBidderDTO) {
        console.log(bidderId);
        if(Object.keys(bidderBody).length === 0){
            throw new HttpException('Empty Body request is not allowed',HttpStatus.BAD_REQUEST);
        }
        const result = await this.bidderService.updateBidder(bidderId, bidderBody);
        return result;
    }

    //Ready and Verified by Jawwad
    @Delete('delete/:bidderId')
    async deleteBidder(@Param('bidderId') bidderId: string) {
        console.log(bidderId);
        const result = await this.bidderService.deleteBidder(bidderId);
        return result;
    }
}
