import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BorrowItemService } from './borrow_item.service';
import { CreateBorrowItemDto } from './dto/create-borrow_item.dto';
import { UpdateBorrowItemDto } from './dto/update-borrow_item.dto';

@Controller('borrow-item')
export class BorrowItemController {
  constructor(private readonly borrowItemService: BorrowItemService) {}

  @Post()
  create(@Body() createBorrowItemDto: CreateBorrowItemDto) {
    return this.borrowItemService.create(createBorrowItemDto);
  }

  @Get()
  findAll() {
    return this.borrowItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.borrowItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBorrowItemDto: UpdateBorrowItemDto) {
    return this.borrowItemService.update(+id, updateBorrowItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.borrowItemService.remove(+id);
  }
}
