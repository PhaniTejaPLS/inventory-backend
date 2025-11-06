import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BorrowRequestService } from './borrow_request.service';
import { CreateBorrowRequestDto } from './dto/create-borrow_request.dto';
import { UpdateBorrowRequestDto } from './dto/update-borrow_request.dto';

@Controller('borrow-requests')
export class BorrowRequestController {
  constructor(private readonly borrowRequestService: BorrowRequestService) {}

  @Post()
  async create(@Body() createBorrowRequestDto: CreateBorrowRequestDto) {
    console.log(createBorrowRequestDto)
    return await this.borrowRequestService.create(createBorrowRequestDto);
  }

  @Get()
  findAll() {
    return this.borrowRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.borrowRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBorrowRequestDto: UpdateBorrowRequestDto) {
    return this.borrowRequestService.update(+id, updateBorrowRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.borrowRequestService.remove(+id);
  }
}
