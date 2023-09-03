import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tag } from "./tag.entity";
import { Employee } from "src/modules/employees/entities/employee.entity";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    departmentName: string;

    @Column()
    organizationId: number;

    @JoinTable()
    @OneToMany(() => Employee, (employee) => employee.tags)
    employee?: Employee[];

    @JoinTable()
    @OneToMany(() => Tag, (tags) => tags.department)
    tags?: Tag[];

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}