import { Test, TestingModule } from '@nestjs/testing';
import { EquimentService } from './equipment.service';

describe('EquimentService', () => {
  let service: EquimentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquimentService],
    }).compile();

    service = module.get<EquimentService>(EquimentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
