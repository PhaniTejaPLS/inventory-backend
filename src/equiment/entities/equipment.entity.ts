import { BorrowItem } from "../../borrow_item/entities/borrow_item.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Equipment {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    tag: string;

    @Column()
    condition:string;


    @Column()
    quantity:number;

    @Column()
    availablequantity:number;

    @OneToMany(()=> BorrowItem, (borrowItem) => borrowItem.equipment)
    borrowItems: BorrowItem[];
    

}
