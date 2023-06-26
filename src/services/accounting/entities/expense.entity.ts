import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employee: string;

  @Column()
  category: string;

  @Column()
  date: string;

  @Column()
  vendorOrMerchant: string;

  @Column()
  amount: string;

  @Column('json', { nullable: true })
  currency: any;

  @Column()
  purpose: string;

  @Column()
  contact: string;

  @Column()
  project: string;

  @Column()
  organizationId: number;

  @Column()
  status: string;

  @Column()
  type: string;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updatedDate: string;
}
