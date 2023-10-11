import { PartialType } from '@nestjs/mapped-types';
import { CreateInitialBidDto } from './CreateInitialBid.dto';

export class UpdateInitialBidDto extends PartialType(CreateInitialBidDto) {}
