import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Invoice } from './invoice.entity';
  
  @Entity()
  export class Payment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @OneToOne(() => Invoice, (invoice) => invoice.payment)
    @JoinColumn()
    invoice: Invoice;
  
    @Column()
    contact: string;
  
    @Column()
    project: string;
  
    @Column()
    paymentDate: string;
  
    @Column()
    paymentMethod: string;
  
    @Column('json', { nullable: true })
    currency: any;
  
    @Column('json', { nullable: true })
    tags: any;
  
    @Column()
    amount: string;
  
    @Column()
    note: string;
  
    @Column()
    organizationId: number;
  
    @CreateDateColumn()
    createdDate: string;
  
    @UpdateDateColumn()
    updatedDate: string;
  }
  