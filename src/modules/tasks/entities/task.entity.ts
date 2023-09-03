import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskNumber: string;

    @Column()
    organizationId: number;

    @Column()
    project: string;

    @Column()
    status: string;

    @Column()
    taskType: string;

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}