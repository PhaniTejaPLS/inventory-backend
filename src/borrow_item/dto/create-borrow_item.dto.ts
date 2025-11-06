import { IsNotEmpty } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateBorrowItemDto {

        @PrimaryGeneratedColumn()
        id: number;

        @IsNotEmpty()
        borrowRequestId: number;

        @IsNotEmpty()
        quantity: number;

        @IsNotEmpty()
        equipmentId: number;
}
