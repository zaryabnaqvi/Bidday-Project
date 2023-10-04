import { Test, TestingModule } from '@nestjs/testing';
import { BreakDownItemController } from './BreakDownItem.controller';
import { BreakDownItemService } from './Services/BreakDownItem.service';

describe('BreakDownItemController', () => {
  let controller: BreakDownItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreakDownItemController],
      providers: [BreakDownItemService],
    }).compile();

    controller = module.get<BreakDownItemController>(BreakDownItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
