import { Test, TestingModule } from '@nestjs/testing';
import { DivisionCategoryController } from './divisionCategory.controller';
import { DivisionCategoryService } from './Services/divisionCategory.service';

describe('DivisionCategoryController', () => {
  let controller: DivisionCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DivisionCategoryController],
      providers: [DivisionCategoryService],
    }).compile();

    controller = module.get<DivisionCategoryController>(DivisionCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
