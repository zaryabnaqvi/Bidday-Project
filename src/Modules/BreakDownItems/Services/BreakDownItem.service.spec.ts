import { Test, TestingModule } from '@nestjs/testing';
import { BreakDownItemService } from './BreakDownItem.service';

describe('BreakDownItemService', () => {
  let service: BreakDownItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreakDownItemService],
    }).compile();

    service = module.get<BreakDownItemService>(BreakDownItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
