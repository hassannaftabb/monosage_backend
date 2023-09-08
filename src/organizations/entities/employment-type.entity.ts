import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class EmploymentType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    organizationId: number;

    @JoinTable()
    @OneToMany(() => Tag, (tags) => tags.employmentType)
    tags?: Tag[];

    @Column({ default: false })
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}