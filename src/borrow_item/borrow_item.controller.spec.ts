import { Test, TestingModule } from '@nestjs/testing';
import { BorrowItemController } from './borrow_item.controller';
import { BorrowItemService } from './borrow_item.service';

describe('BorrowItemController', () => {
  let controller: BorrowItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BorrowItemController],
      providers: [BorrowItemService],
    }).compile();

    controller = module.get<BorrowItemController>(BorrowItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
