import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProposalTemplate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    employee: string;

    @Column()
    organizationId: number;

    @Column()
    name: string;

    @Column()
    content: string;

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}