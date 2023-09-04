import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Pipeline {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    organizationId: number;
    
    @Column()
    name: string;

    @Column()
    description: string;
  
    @Column('json', { nullable: true })
    stages: any;
    
    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}