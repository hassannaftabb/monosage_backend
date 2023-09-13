import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Employee } from "src/modules/employees/entities/employee.entity";
import { Department } from "./department.entity";
import { Vendor } from "./vendor.entity";
import { EmploymentType } from "./employment-type.entity";
import { Team } from "./team.entity";
import { Equipment } from "./equipment.entity";
import { Lead } from "src/modules/contacts/entities/lead.entity";

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

    @Column({ default: false })
    isDeleted: boolean;

    @JoinTable()
    @ManyToOne(() => Employee, (employee) => employee.tags)
    employee?: Employee;

    // @JoinTable()
    // @ManyToOne(() => Lead, (lead) => lead.tags)
    // lead?: Lead;

    @JoinTable()
    @ManyToOne(() => Department, (department) => department.tags)
    department?: Department;

    @JoinTable()
    @ManyToOne(() => Team, (team) => team.tags)
    team?: Team;

    @JoinTable()
    @ManyToOne(() => Vendor, (vendor) => vendor.tags)
    vendor?: Vendor;

    @JoinTable()
    @ManyToOne(() => EmploymentType, (employmentType) => employmentType.tags)
    employmentType: EmploymentType;

    @JoinTable()
    @ManyToOne(() => Equipment, (equipment) => equipment.tags)
    equipment: Equipment;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}