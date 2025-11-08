import { PartialType } from '@nestjs/mapped-types';
import { CreateBorrowRequestDto } from './create-borrow_request.dto';

export class UpdateBorrowRequestDto extends PartialType(CreateBorrowRequestDto) {
    // The UpdateBorrowRequestDto already inherits all properties from CreateBorrowRequestDto
    // and makes them optional through PartialType
    // No need to add additional properties unless you have specific update-only fields
}
