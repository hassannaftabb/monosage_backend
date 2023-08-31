import { Column, CreateDateColumn, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Payment } from "./payment.entity";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    invoiceNumber: number;

    @Column()
    contact: string;

    @Column()
    organizationId: number;
    
    @Column()
    invoiceDate: string;

    @Column()
    dueDate: string;

    @Column('json', { nullable: true })
    currency: any;

    @Column()
    discountValue: number;

    @Column()
    discountType: string;

    @Column({nullable: true})
    tax1: number;

    @Column()
    tax1Type: string;

    @Column({nullable: true})
    tax2Value: number;

    @Column()
    tax2Type: string;

    @Column()
    terms: string;

    @Column({nullable: true})
    tags: string;

    @JoinTable()
    @OneToOne(() => Payment, (payment) => payment.invoice)
    payment?: Payment;

    @Column()
    applyDiscountAfterTax: boolean;

    @Column()
    invoiceType: string;

    @Column({default: false})
    isDraft: boolean;

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}