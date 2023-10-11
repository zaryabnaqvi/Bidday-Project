import { Test, TestingModule } from '@nestjs/testing';
import { InitialBidService } from './InitialBid.service';

describe('InitialBidService', () => {
  let service: InitialBidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitialBidService],
    }).compile();

    service = module.get<InitialBidService>(InitialBidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
