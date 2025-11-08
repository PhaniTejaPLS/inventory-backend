import { IsDate, IsNotEmpty } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateBorrowItemDto {

        @PrimaryGeneratedColumn()
        id: number;

        @IsNotEmpty()
        borrowRequestId: number;

        @IsNotEmpty()
        quantity: number;

        @IsNotEmpty()
        @IsDate()
        returnDate: Date;

        @IsNotEmpty()
        @IsDate()
        borrowDate: Date;

        @IsNotEmpty()
        equipmentId: number;
}
