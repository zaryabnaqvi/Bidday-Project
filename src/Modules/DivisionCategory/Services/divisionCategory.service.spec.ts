import { Test, TestingModule } from '@nestjs/testing';
import { DivisionCategoryService } from './divisionCategory.service';

describe('DivisionCategoryService', () => {
  let service: DivisionCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DivisionCategoryService],
    }).compile();

    service = module.get<DivisionCategoryService>(DivisionCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
