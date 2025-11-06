import { Module } from '@nestjs/common';
import { BorrowRequestService } from './borrow_request.service';
import { BorrowRequestController } from './borrow_request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowRequest } from './entities/borrow_request.entity';
import { BorrowItem } from '../borrow_item/entities/borrow_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BorrowRequest, BorrowItem])],
  controllers: [BorrowRequestController],
  providers: [BorrowRequestService],
})
export class BorrowRequestModule {}
