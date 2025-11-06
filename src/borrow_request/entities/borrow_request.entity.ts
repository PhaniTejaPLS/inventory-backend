import { BorrowItem } from "../../borrow_item/entities/borrow_item.entity";
import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class BorrowRequest {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    requestDate: Date;

    @CreateDateColumn({ nullable: true })
    approvalDate: Date;

    @Column({ type: 'enum', enum: ['pending', 'approved', 'rejected', 'returned'], default: 'pending' })
    status: 'pending' | 'approved' | 'rejected' | 'returned';


    @Column()
    userId: number;
    
    @ManyToOne( () => User, (user) => user.borrowRequests)
    @JoinColumn({ name: 'userId' })
    user: User;

    

    @OneToMany(()=> BorrowItem, (borrowItem) => borrowItem.borrowRequest)
    items: BorrowItem[];

}
