import { Test, TestingModule } from '@nestjs/testing';
import { BorrowItemService } from './borrow_item.service';

describe('BorrowItemService', () => {
  let service: BorrowItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowItemService],
    }).compile();

    service = module.get<BorrowItemService>(BorrowItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
