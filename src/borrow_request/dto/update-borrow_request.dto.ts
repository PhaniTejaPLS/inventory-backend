import { PartialType } from '@nestjs/mapped-types';
import { CreateBorrowRequestDto } from './create-borrow_request.dto';

export class UpdateBorrowRequestDto extends PartialType(CreateBorrowRequestDto) {}
