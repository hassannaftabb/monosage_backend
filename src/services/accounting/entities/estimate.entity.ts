import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Estimate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estimateNumber: number;

  @Column()
  contact: string;

  @Column()
  estimateDate: string;

  @Column()
  dueDate: string;

  @Column('json', { nullable: true })
  currency: any;

  @Column()
  terms: string;

  @Column()
  estimateType: string;

  @Column()
  discountValue: number;

  @Column()
  discountType: string;

  @Column()
  tax1: number;

  @Column()
  tax1Type: string;

  @Column()
  tax2: number;

  @Column()
  tax2Type: string;

  @Column()
  applyDiscountAfterTax: boolean;

  @Column()
  organizationId: number;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updatedDate: string;
}
