import { BorrowRequest } from "../../borrow_request/entities/borrow_request.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;


    @Column({ type:'enum', enum: ['staff', 'student','admin'], default: 'student' })
    role:string;

    @OneToMany( () => BorrowRequest, (borrowRequest) => borrowRequest.user)
    borrowRequests: BorrowRequest[];

    
}
