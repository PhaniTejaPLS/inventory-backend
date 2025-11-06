import { Module } from '@nestjs/common';
import { BorrowItemService } from './borrow_item.service';
import { BorrowItemController } from './borrow_item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowItem } from './entities/borrow_item.entity';

@Module({
  imports : [TypeOrmModule.forFeature([BorrowItem])],
  controllers: [BorrowItemController],
  providers: [BorrowItemService],
})
export class BorrowItemModule {}
