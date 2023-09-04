import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskNumber: string;

    @Column()
    title: string;

    @Column()
    organizationId: number;

    @Column()
    project: string;

    @Column()
    status: string;

    @Column()
    taskType: string;

    @Column()
    employee: string;

    @Column()
    priority: string;

    @Column()
    size: string;

    @Column()
    tags: string;

    @Column()
    dueDate: string;

    @Column()
    estimateDays: string;

    @Column()
    estimateHours: string;

    @Column()
    estimateMinutes: string;

    @Column()
    terms: string;

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}