import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCodeController } from './projectCode.controller';
import { ProjectCodeService } from './project-code.service';

describe('ProjectCodeController', () => {
  let controller: ProjectCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectCodeController],
      providers: [ProjectCodeService],
    }).compile();

    controller = module.get<ProjectCodeController>(ProjectCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
