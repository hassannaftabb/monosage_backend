import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tag } from "./tag.entity";
import { Employee } from "src/modules/employees/entities/employee.entity";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    organizationId: number;

    @JoinTable()
    @OneToOne(() => Employee, (employee) => employee.managerTeam)
    manager?: Employee;

    @JoinTable()
    @OneToMany(() => Employee, (employee) => employee.team)
    members?: Employee[];

    @JoinTable()
    @OneToMany(() => Tag, (tags) => tags.team)
    tags?: Tag[];

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}