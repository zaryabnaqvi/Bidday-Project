import { Test, TestingModule } from '@nestjs/testing';
import { IndividualBidService } from './IndividualBid.service';

describe('IndividualBidService', () => {
  let service: IndividualBidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndividualBidService],
    }).compile();

    service = module.get<IndividualBidService>(IndividualBidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
