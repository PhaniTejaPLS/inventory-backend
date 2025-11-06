import { Injectable } from '@nestjs/common';
import { CreateBorrowItemDto } from './dto/create-borrow_item.dto';
import { UpdateBorrowItemDto } from './dto/update-borrow_item.dto';

@Injectable()
export class BorrowItemService {
  create(createBorrowItemDto: CreateBorrowItemDto) {
    return 'This action adds a new borrowItem';
  }

  findAll() {
    return `This action returns all borrowItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} borrowItem`;
  }

  update(id: number, updateBorrowItemDto: UpdateBorrowItemDto) {
    return `This action updates a #${id} borrowItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} borrowItem`;
  }
}
