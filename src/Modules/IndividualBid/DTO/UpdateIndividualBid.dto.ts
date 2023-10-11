import { PartialType } from '@nestjs/mapped-types';
import { CreateIndividualBidDto } from './CreateIndividualBid.dto';

export class UpdateIndividualBidDto extends PartialType(CreateIndividualBidDto) {}
