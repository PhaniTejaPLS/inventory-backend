import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipment {

    @PrimaryGeneratedColumn()
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

    @Column()
    description:string;


}
