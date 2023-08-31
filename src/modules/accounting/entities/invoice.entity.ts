import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Payment } from './payment.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoiceNumber: number;

  @Column()
  contact: string;

  @Column()
  invoiceDate: string;

  @Column()
  dueDate: string;

  @Column('json', { nullable: true })
  currency: any;

  @Column()
  terms: string;

  @Column()
  invoiceType: string;

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

  @JoinTable()
  @OneToOne(() => Payment, (payment) => payment.invoice)
  payment?: Payment;

  @Column()
  organizationId: number;

  @Column()
  applyDiscountAfterTax: boolean;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updatedDate: string;
}
