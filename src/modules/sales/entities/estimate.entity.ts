import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Estimate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    estimateNumber: number;

    @Column()
    contact: string;

    @Column()
    organizationId: number;
    
    @Column()
    estimateDate: string;

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
    tax2: number;

    @Column()
    tax2Type: string;

    @Column()
    terms: string;
  
    @Column('json', { nullable: true })
    tags: any;

    @Column()
    applyDiscountAfterTax: boolean;

    @Column()
    estimateType: string;

    @Column({default: false})
    isDraft: boolean;

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}