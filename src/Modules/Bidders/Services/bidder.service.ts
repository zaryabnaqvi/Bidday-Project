import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Bidders } from "../Schema/bidder.schema";
import { Model } from "mongoose";
import { createBidderDTO } from '../DTO/CreateBidder.dto';
import { ICreateBidder } from '../Interfaces/ICreateBidder.interface';
import { updateBidderDTO } from '../DTO/UpdateBidder.dto';
import { IUpdateBidder } from '../Interfaces/IUpdateBidder.interface';

@Injectable()
export class BidderService {

    constructor(
        @InjectModel(Bidders.name) private readonly bidderModel: Model<Bidders>,
    ) {}

    async fetchBidders() {
        try {
            const bidders = await this.bidderModel.find();
            if (bidders.length === 0) {
                throw new HttpException('No bidder found', HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: HttpStatus.OK,
                msg: 'Bidders Found Successfully',
                data: bidders
            };
        } catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

    async fetchBidderById(id: string) {
        try {
            const bidderById = await this.bidderModel.findOne({
                _id: id
            });
            if (!bidderById) {
                throw new HttpException('No Bidder found', HttpStatus.NOT_FOUND);
            }
            return {
                statusCode: HttpStatus.OK,
                msg: 'Bidder by Id  Found Successfully',
                data: bidderById
            };
        } catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

    async createBidder(divisionCategoryId:string,projectId:string,createBidderBody: createBidderDTO) {
        try {
            const { companyName, phoneNumber, contact } = createBidderBody;
            const isBidderExist = await this.bidderModel.findOne({
                companyName,
                phoneNumber,
                contact,
            });
            if (isBidderExist) {
                throw new HttpException('Bidder is already exist', HttpStatus.BAD_REQUEST)
            }
          
            const toCreateBidder: ICreateBidder = {projectId,contact:createBidderBody.contact,phoneNumber:createBidderBody.phoneNumber,companyName:createBidderBody.companyName,divisionCategoryId};
            const newBidder = new this.bidderModel(toCreateBidder);
            const createdBidder = await newBidder.save();
            return {
                statusCode: HttpStatus.OK,
                msg: 'Bidder Created Successfully',
                data: createdBidder
            };
        } catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

    async updateBidder(id: string, bidderBody: updateBidderDTO) {
        try {

            const updateBidder: IUpdateBidder = bidderBody
            await this.bidderModel.findByIdAndUpdate(id, updateBidder);
            const updatedBidderData = await this.bidderModel.findOne({
                _id: id
            });

            return {
                statusCode: HttpStatus.OK,
                message: 'Bidder Data Updated Successfully',
                data: updatedBidderData,
            };
        } catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }

    async deleteBidder(id: string) {
        try {
            const bidderById = await this.bidderModel.findOne({
                _id: id
            });
            if (!bidderById) {
                throw new HttpException('Bidder with this id not found', HttpStatus.NOT_FOUND);
            }
            //Deleting a Bidder
            await this.bidderModel.findByIdAndRemove(id);
            return {
                statusCode: HttpStatus.OK,
                msg: 'Bidder deleted Successfully'
            };
        } catch (error) {
            throw new HttpException(
                error.message,
                error.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}