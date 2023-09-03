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
    template: string;

    @Column()
    contact: string;

    @Column()
    jobPostUrl: string;

    @Column()
    proposalDate: string;
  
    @Column()
    tags: string;

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