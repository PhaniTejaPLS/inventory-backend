import { BorrowRequest } from "../../borrow_request/entities/borrow_request.entity";
import { Equipment } from "../../equiment/entities/equipment.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class BorrowItem {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity:number;

    @ManyToOne(()=> BorrowRequest, (borrowRequest) => borrowRequest.items)
    @JoinColumn({ name: 'requestId' })
    borrowRequest: BorrowRequest;

    @ManyToOne(()=> Equipment, (equipment) => equipment.borrowItems)
    @JoinColumn({ name: 'equipmentId' })
    equipment: Equipment;

}
