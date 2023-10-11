import { Test, TestingModule } from '@nestjs/testing';
import { InitialBidController } from './InitialBid.controller';
import { InitialBidService } from './Services/InitialBid.service';

describe('InitialBidController', () => {
  let controller: InitialBidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitialBidController],
      providers: [InitialBidService],
    }).compile();

    controller = module.get<InitialBidController>(InitialBidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
