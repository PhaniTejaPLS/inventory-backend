import { PartialType } from '@nestjs/mapped-types';
import { CreateBorrowItemDto } from './create-borrow_item.dto';

export class UpdateBorrowItemDto extends PartialType(CreateBorrowItemDto) {}
