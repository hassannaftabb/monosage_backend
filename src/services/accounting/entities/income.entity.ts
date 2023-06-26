import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employee: string;

  @Column()
  contact: string;

  @Column()
  date: string;

  @Column('json', { nullable: true })
  currency: any;

  @Column()
  amount: string;

  @Column()
  bonus: boolean;

  @Column()
  organizationId: number;

  @Column()
  description: string;

  @CreateDateColumn()
  createdDate: string;

  @UpdateDateColumn()
  updatedDate: string;
}
