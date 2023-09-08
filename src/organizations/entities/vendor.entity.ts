import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Tag } from "./tag.entity";

@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vendorName: string;

    @Column()
    vendorphone: string;

    @Column()
    vendorEmail: string;

    @Column()
    vendorWebsite: string;

    @Column()
    organizationId: number;

    @Column({ default: false })
    isDeleted: boolean;

    @JoinTable()
    @OneToMany(() => Tag, (tags) => tags.vendor)
    tags?: Tag[];

    @CreateDateColumn()
    createdDate: string;

    @UpdateDateColumn()
    updatedDate: string;
}