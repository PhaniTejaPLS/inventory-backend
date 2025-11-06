import { IsDate, IsNotEmpty } from "class-validator";
import { CreateBorrowItemDto } from "src/borrow_item/dto/create-borrow_item.dto";
import { User } from "../../users/entities/user.entity";

export class CreateBorrowRequestDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsDate()
    requestDate: Date;

    @IsDate()
    approvalDate?: Date;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    status: 'pending' | 'approved' | 'rejected' | 'returned';

    @IsNotEmpty()
    items: Array<CreateBorrowItemDto>


}
