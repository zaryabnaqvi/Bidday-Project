import { Test, TestingModule } from '@nestjs/testing';
import { IndividualBidController } from './IndividualBid.controller';
import { IndividualBidService } from './Services/IndividualBid.service';

describe('IndividualBidController', () => {
  let controller: IndividualBidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndividualBidController],
      providers: [IndividualBidService],
    }).compile();

    controller = module.get<IndividualBidController>(IndividualBidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
