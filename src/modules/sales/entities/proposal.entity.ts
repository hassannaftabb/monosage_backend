import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Proposal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    organizationId: number;
    
    @Column()
    author: string;

    @Column()
    template: number;

    @Column()
    contact: number;

    @Column()
    jobPostURL: string;

    @Column()
    proposalDate: string;
  
    @Column('json', { nullable: true })
    tags: any;

    @Column()
    jobPostContent: string;

    @Column()
    proposalContent: string;

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}