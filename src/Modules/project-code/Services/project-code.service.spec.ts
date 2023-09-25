import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCodeService } from './project-code.service';

describe('ProjectCodeService', () => {
  let service: ProjectCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectCodeService],
    }).compile();

    service = module.get<ProjectCodeService>(ProjectCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
