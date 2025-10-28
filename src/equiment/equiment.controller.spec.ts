import { Test, TestingModule } from '@nestjs/testing';
import { EquimentController } from './equipment.controller';
import { EquimentService } from './equipment.service';

describe('EquimentController', () => {
  let controller: EquimentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquimentController],
      providers: [EquimentService],
    }).compile();

    controller = module.get<EquimentController>(EquimentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
