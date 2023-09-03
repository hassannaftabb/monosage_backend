import { Employee } from "src/modules/employees/entities/employee.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Department } from "./department.entity";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tagName: string;

    @Column()
    organizationId: number;

    @Column()
    tagColor: string;

    @Column()
    tenantLevel: boolean;

    @Column()
    description: string;

    @Column({default: false})
    isDeleted: boolean;

    @JoinTable()
    @ManyToOne(() => Employee, (employee) => employee.tags)
    employee?: Employee;

    @JoinTable()
    @ManyToOne(() => Department, (department) => department.tags)
    department?: Department;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}