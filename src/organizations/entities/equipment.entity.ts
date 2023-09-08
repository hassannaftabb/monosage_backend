import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    url: string;

    @Column()
    manufactureYear: string;

    @Column()
    sn: string;

    @Column()
    maxSharePeriod: string;

    @Column()
    initialCost: string;

    @Column()
    currency: string;

    @Column()
    autoApprove: boolean;

    @Column()
    organizationId: number;

    @JoinTable()
    @OneToMany(() => Tag, (tags) => tags.equipment)
    tags?: Tag[];

    @Column({ default: false })
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}