import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RecurringExpense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  value: string;

  @Column('json', { nullable: true })
  currency: any;

  @Column()
  organizationId: number;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updatedDate: string;
}
